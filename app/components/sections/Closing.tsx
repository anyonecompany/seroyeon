'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import CountDown from '@/app/components/CountDown'
import { event as gtagEvent } from '@/app/lib/gtag'

interface ClosingProps {
  onCtaClick: () => void
}

export default function Closing({ onCtaClick }: ClosingProps) {
  const handleCta = () => {
    gtagEvent('cta_click', { location: 'closing' })
    onCtaClick()
  }

  return (
    <section className="py-24 px-6 bg-stone-900 text-white text-center">
      <div className="max-w-[480px] mx-auto">
        <p className="text-base font-medium text-stone-400 mb-1">여기까지 읽으셨다면,</p>
        <p className="text-base font-medium text-stone-400 mb-10">이미 준비된 겁니다.</p>

        <div className="bg-stone-800 border border-stone-700 rounded-2xl p-6 mb-10 text-left">
          <h3 className="text-2xl font-bold mb-4 text-center">서로연 매치캠프 1기</h3>
          <p className="text-base font-medium text-stone-300 leading-relaxed mb-4">
            5월 29일 목요일부터 6월 1일 일요일까지.<br />
            남자 5명, 여자 5명. 딱 10명만 함께합니다.
          </p>
          <p className="text-base font-medium text-stone-500 mb-4">
            장소는 선발 확정 후 개별 안내드립니다.
          </p>
          <div className="h-px bg-stone-700 my-4" />
          <p className="text-xs font-medium text-stone-500">사전 등록 마감까지 <CountDown /></p>
        </div>

        <p className="text-base font-medium text-stone-300 mb-6 leading-relaxed">
          일요일 밤의 공허함을<br /><span className="text-white font-black">설렘으로 바꿀 수 있는 기회.</span>
        </p>
        <p className="text-base font-medium leading-relaxed mb-8">
          지금 등록하지 않으면,<br />다음 기회는 <span className="text-[#FF6321] font-black">2기(7월)</span>까지 없습니다.
        </p>
        <p className="text-base font-medium text-stone-400 mb-12">
          그리고 2기부터는<br />정가 150만 원입니다.
        </p>

        <div className="space-y-3 text-left inline-block mb-8">
          {['무료, 결제 없음', '30초면 끝나는 등록', '사전 등록 = 우선 참여 자격 확보'].map((txt, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-medium text-stone-300">
              <Check size={18} className="text-[#FF6321]" />
              <span>{txt}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <Image
            src="/images/logo-mark.png"
            alt="서로연"
            width={96}
            height={24}
            className="h-6 w-auto mx-auto invert"
          />
        </div>

        <button
          onClick={handleCta}
          className="w-full bg-[#FF6321] hover:bg-[#E55A1E] text-white text-base font-medium py-4 rounded-xl transition-transform active:scale-95 mb-8"
        >
          30초 만에 무료 등록하기
        </button>

        <p className="text-base font-medium text-stone-400 mb-1">좋은 사람은,</p>
        <p className="text-base font-medium text-stone-400">기다려주지 않습니다.</p>
      </div>
    </section>
  )
}
