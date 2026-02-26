'use client'

import { Check } from 'lucide-react'
import { event as gtagEvent } from '@/app/lib/gtag'

interface PricingProps {
  onCtaClick: () => void
}

export default function Pricing({ onCtaClick }: PricingProps) {
  const handleCta = () => {
    gtagEvent('cta_click', { location: 'price' })
    onCtaClick()
  }

  const steps = [
    { title: '사전 등록', tag: '무료 · 30초', desc: '이름, 연락처', hint: '→ 1기 우선 참여 자격을 확보하세요' },
    { title: '보증금 10만 원 납부', desc: '사전 등록자 중 안내 후 납부. 캠프비(79만 원)에서 공제되므로 추가 비용이 아닙니다.', hint: '→ 진지한 참여 의사를 확인합니다' },
    { title: '1차 선발 — 비대면 미팅', tag: '약 25명 → 5배수', desc: 'Zoom/Google Meet 화상 미팅 15~20분.\n선발 기준: 결혼 의향의 진정성, 프로그램 적합도, 기본 소통 능력.', hint: '→ "놀러 오는 사람"을 걸러내는 과정입니다' },
    { title: '2차 선발 — 대면 미팅', tag: '약 10명 → 2배수', desc: '서울 시내 카페에서 1:1 대면 미팅 30분.\n선발 기준: 실제 인상·분위기, 프로그램 내 조화, 최종 적합도.', hint: '→ 모든 참가자가 서로에게 좋은 경험이 되도록, 운영진이 직접 확인합니다' },
    { title: '최종 확정 — 잔금 69만 원 결제', desc: '2차 선발 통과자 남 5명 · 여 5명 = 총 10명.\n보증금 10만 원은 캠프비(79만 원)에서 차감됩니다.', hint: '→ 잔금 결제 완료 시 참여 확정', dark: true },
  ]

  const valueItems = [
    '숙박 3박',
    '식사 전체',
    '전체 프로그램',
    '1:1 매칭',
  ]

  return (
    <section className="py-16 px-6 bg-white border-t border-stone-200">
      <div className="max-w-[480px] mx-auto">
        {/* Step 0: Selection process first */}
        <div className="mb-12">
          <h3 className="text-center text-2xl font-bold text-stone-900 mb-3">
            아무나 참여할 수 없습니다
          </h3>
          <p className="text-center text-base font-medium text-stone-500 mb-8">
            5단계 선발로 모든 참가자의 퀄리티가 보장됩니다.
          </p>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 border ${
                  step.dark
                    ? 'bg-stone-900 text-white border-stone-700'
                    : 'bg-white border-stone-200'
                }`}
              >
                <div
                  className={`absolute -top-3 -left-1 text-white text-xs font-medium w-7 h-7 rounded-full flex items-center justify-center ${
                    step.dark ? 'bg-stone-700 border-2 border-[#FF6321]' : 'bg-[#FF6321]'
                  }`}
                >
                  {i + 1}
                </div>
                <div className="pt-1">
                  <p className={`text-base font-medium mb-1 ${step.dark ? 'text-white' : 'text-stone-900'}`}>
                    {step.title}
                    {step.tag && <span className="text-xs font-medium text-stone-400 ml-1">({step.tag})</span>}
                  </p>
                  <p className={`text-base font-medium whitespace-pre-line leading-relaxed ${step.dark ? 'text-stone-400' : 'text-stone-500'}`}>
                    {step.desc}
                  </p>
                  <p className="text-xs font-medium text-[#FF6321] mt-2">{step.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Value grid */}
        <div className="mb-12">
          <h3 className="text-center text-2xl font-bold text-stone-900 mb-6">
            이 모든 것이 포함됩니다
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {valueItems.map((item) => (
              <div key={item} className="border border-stone-200 rounded-2xl p-4 flex items-center gap-3">
                <Check size={20} className="text-[#FF6321] shrink-0" />
                <p className="text-base font-medium text-stone-900">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Price anchoring */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium bg-[#FF6321] text-white rounded-full px-3 py-1 mb-6">
            1기 한정 특별가
          </span>
          <p className="text-base font-medium text-stone-500 mb-2">결혼정보회사 평균 비용</p>
          <p className="text-2xl font-bold text-stone-300 line-through decoration-red-500/50 decoration-4 mb-8">300~600만 원</p>
          <p className="text-5xl font-black text-stone-900 mb-2">79만 원</p>
          <p className="text-xs font-medium text-stone-500 mb-2">(3박 4일 숙식 포함)</p>
          <p className="text-xs font-medium text-stone-400">2기부터 정가 150만 원 예정</p>
        </div>

        <div className="bg-white border border-stone-200 p-6 rounded-2xl text-center mb-6">
          <p className="text-base font-medium text-stone-900 mb-2">하루에 2만 7천 원.</p>
          <p className="text-base font-medium text-stone-600">소개팅 10번 나가는 비용과 같습니다.</p>
        </div>

        <div className="bg-stone-900 text-white p-6 rounded-2xl text-center mb-12 border border-stone-700">
          <p className="text-base font-medium text-stone-300">
            고민만 하는 <span className="text-stone-400 line-through">1년</span> vs 신청하는 <span className="text-[#FF6321] font-black">3분.</span>
          </p>
        </div>

        {/* Step 3: CTA */}
        <p className="text-center text-xs font-medium text-stone-500 mb-4">
          사전 등록은 무료 · 선발 시 별도 안내
        </p>
        <button
          onClick={handleCta}
          className="w-full bg-[#FF6321] hover:bg-[#E55A1E] text-white text-base font-medium py-4 rounded-xl transition-transform active:scale-95 mb-10"
        >
          무료 사전 등록하기
        </button>

        {/* Unselected info */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-10">
          <p className="text-base font-medium text-stone-900 mb-3">선발되지 않았을 경우</p>
          <p className="text-base font-medium text-stone-600 leading-relaxed mb-4">
            보증금 10만 원: <span className="font-black text-stone-800">전액 환불</span> 또는 <span className="font-black text-stone-800">다음 캠프 예치금 이월</span> 중 선택
          </p>
          <p className="text-xs font-medium text-stone-700 mb-2">이월 선택 시 혜택:</p>
          <div className="space-y-2">
            {[
              '2기 우선 선발권 — 1차 미팅 면제, 바로 2차 대면 미팅부터',
              '2기 99만 원 특별가 적용 (정가 150만 원 대비 34% 할인, 보증금 이월자 한정)',
              '1기 우선 대기자 전용 카카오톡 채널 초대 — 캠프 후기·비하인드 콘텐츠 우선 공유',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-xs font-medium text-[#FF6321] shrink-0">{'①②③'[i]}</span>
                <p className="text-xs font-medium text-stone-600">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-medium text-stone-500 mt-4 leading-relaxed italic">
            &quot;1기에 보증금을 납부한 분은 서로연이 기억합니다. 다음 기회에 가장 먼저 연락드립니다.&quot;
          </p>
        </div>

        <div className="text-xs font-medium text-stone-500 space-y-1 mb-10 text-center">
          <p>※ 보증금은 캠프비(79만 원)에서 공제됩니다.</p>
          <p>※ 캠프 미개최 시 전액 환불.</p>
        </div>

        <div className="flex items-center gap-3 bg-stone-900 text-white p-6 rounded-2xl border border-stone-700">
          <span className="w-2 h-2 bg-[#FF6321] rounded-full shrink-0" />
          <p className="text-base font-medium leading-relaxed">
            <span className="font-black text-[#FF6321]">1기 특별가.</span><br />2기부터는 정가 150만 원입니다.
          </p>
        </div>
      </div>
    </section>
  )
}
