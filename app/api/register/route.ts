import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, gender, birth_date, phone, ...utmParams } = body

    // 유효성 검사
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: '이름을 2자 이상 입력해주세요.' }, { status: 400 })
    }
    if (!gender || !['male', 'female'].includes(gender)) {
      return NextResponse.json({ error: '성별을 선택해주세요.' }, { status: 400 })
    }
    if (!birth_date || !/^\d{6}$/.test(birth_date)) {
      return NextResponse.json({ error: '생년월일 6자리를 입력해주세요.' }, { status: 400 })
    }
    if (!phone || !/^010-\d{4}-\d{4}$/.test(phone)) {
      return NextResponse.json({ error: '전화번호 형식이 올바르지 않습니다.' }, { status: 400 })
    }

    // Supabase 저장
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Supabase 설정이 없습니다.' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const { data, error } = await supabase.from('registrations').insert({
      name: name.trim(),
      gender,
      birth_date,
      phone,
      ...utmParams,
    }).select('id')

    if (error) throw error

    // Slack 알림
    if (slackWebhookUrl) {
      const genderLabel = gender === 'male' ? '남성' : '여성'
      const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })

      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            {
              type: 'header',
              text: { type: 'plain_text', text: '🎉 새로운 사전 등록!', emoji: true },
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*이름*\n${name.trim()}` },
                { type: 'mrkdwn', text: `*성별*\n${genderLabel}` },
                { type: 'mrkdwn', text: `*생년월일*\n${birth_date}` },
                { type: 'mrkdwn', text: `*전화번호*\n${phone}` },
              ],
            },
            ...(Object.keys(utmParams).length > 0
              ? [{
                  type: 'context' as const,
                  elements: [
                    {
                      type: 'mrkdwn' as const,
                      text: Object.entries(utmParams)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(' | '),
                    },
                  ],
                }]
              : []),
            {
              type: 'context',
              elements: [{ type: 'mrkdwn', text: `등록 시각: ${now}` }],
            },
          ],
        }),
      }).catch((err) => console.error('Slack 알림 실패:', err))
    }

    return NextResponse.json({ success: true, id: data?.[0]?.id })
  } catch (err: unknown) {
    console.error('Registration error:', err instanceof Error ? err.message : JSON.stringify(err))
    return NextResponse.json({ error: '등록에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 500 })
  }
}
