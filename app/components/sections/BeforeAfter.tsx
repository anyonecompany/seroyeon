'use client'

import { ChevronRight } from 'lucide-react'
import { event as gtagEvent } from '@/app/lib/gtag'

interface BeforeAfterProps {
  onCtaClick?: () => void
}

const cards = [
  {
    before: '프로필 사진 1장으로 판단',
    beforeSub: '직업·학력·외모가 기준',
    after: '72시간 함께한 진짜 인상',
    afterSub: '대화·반응·가치관이 기준',
  },
  {
    before: '"괜찮은 사람 어디 없을까?"',
    beforeSub: '막연한 기대와 반복되는 실망',
    after: '"이 사람이다"라는 확신',
    afterSub: '가면 파티·편지·밤산책에서 확인한 감정',
  },
  {
    before: '소개팅 앱을 또 켠다',
    beforeSub: '끝나지 않는 무한 반복',
    after: '소개팅 앱을 삭제한다',
    afterSub: '더 이상 필요 없으니까',
  },
]

export default function BeforeAfter({ onCtaClick }: BeforeAfterProps) {
  const handleMidCta = () => {
    gtagEvent('cta_click', { location: 'mid' })
    onCtaClick?.()
  }

  return (
    <section className="py-16 px-6 bg-stone-900">
      <div className="max-w-[480px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] font-black text-white leading-tight">
            3박 4일 전의 나.<br />3박 4일 후의 나.
          </h2>
        </div>

        <div className="space-y-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto_1fr] items-stretch rounded-2xl overflow-hidden border border-stone-700"
            >
              <div className="bg-stone-800 p-4">
                <p className="text-[10px] font-medium tracking-widest text-stone-500 uppercase mb-2">Before</p>
                <p className="text-sm font-medium text-stone-400 leading-snug">
                  {card.before}
                </p>
                <p className="text-[11px] font-medium text-stone-500 mt-1.5">{card.beforeSub}</p>
              </div>

              <div className="flex items-center justify-center w-8 bg-stone-800/50">
                <ChevronRight size={14} className="text-[#FF6321]" />
              </div>

              <div className="bg-stone-900 p-4">
                <p className="text-[10px] font-medium tracking-widest text-[#FF6321] uppercase mb-2">After</p>
                <p className="text-sm font-bold text-white leading-snug">{card.after}</p>
                <p className="text-[11px] font-medium text-stone-400 mt-1.5">{card.afterSub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base font-medium text-white">
            3박 4일은 생각보다 짧지 않습니다.
          </p>
          <p className="text-base font-medium text-stone-400 mt-2">
            누군가의 진짜 모습을 알기에 충분한 시간.
          </p>
        </div>

        {onCtaClick && (
          <div className="mt-8 text-center">
            <p className="text-base font-medium text-stone-400 mb-2">관심이 생기셨나요?</p>
            <button
              onClick={handleMidCta}
              className="text-base font-medium text-[#FF6321] cursor-pointer bg-transparent border-none"
            >
              무료 사전 등록 →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
