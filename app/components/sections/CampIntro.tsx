// Server Component

import Image from 'next/image'

export default function CampIntro() {
  return (
    <section className="py-16 px-6 bg-white border-t border-stone-200">
      <div className="max-w-[480px] mx-auto">
        <div className="w-full h-[280px] rounded-2xl mb-3 relative overflow-hidden">
          <Image
            src="/camp-atmosphere.png"
            alt="캠프장 분위기"
            fill
            sizes="(max-width:480px) 100vw, 480px"
            quality={80}
            className="object-cover"
          />
        </div>
        <p className="text-xs font-medium text-stone-400 text-center mb-12">
          뇌과학 기반 3박 4일 결혼 매칭 프로그램
        </p>

        <div className="space-y-8">
          <div className="border-t border-stone-200 pt-6">
            <p className="text-2xl font-bold text-stone-900 mb-3">소개팅이 아닙니다</p>
            <p className="text-base font-medium text-stone-600 leading-relaxed">
              결혼을 진지하게 생각하는 남녀 각 5명이 3박 4일 동안 한 공간에서 함께 생활하며 서로를 알아가는 프로그램입니다.<br /><br />
              소개팅처럼 30분이 아니라,<br /><span className="text-stone-900 font-black">72시간을 함께합니다.</span>
            </p>
          </div>

          <div className="border-t border-stone-200 pt-6">
            <p className="text-2xl font-bold text-stone-900 mb-3">이력서가 아니라 경험으로</p>
            <p className="text-base font-medium text-stone-600 leading-relaxed">
              직업·학력을 가린 채 3일간 함께 미션을 수행하고, 깊은 대화를 나누고, 예상치 못한 상황에서 상대의 진짜 모습을 봅니다.<br /><br />
              <span className="text-stone-900 font-black">이력서가 아니라 경험으로 판단합니다.</span>
            </p>
          </div>

          <div className="border-t border-stone-200 pt-6">
            <p className="text-2xl font-bold text-stone-900 mb-3">왜 3박 4일인가?</p>
            <p className="text-base font-medium text-stone-600 leading-relaxed">
              뇌과학 연구에 따르면, 사람에 대한 진짜 인상은 최소 48시간 이상의 다양한 상황 노출 후에 형성됩니다.<br /><br />
              1시간 대화로는 절대 알 수 없는 것들 —<br />아침에 일어나는 모습, 스트레스 상황에서의 반응, 웃음 포인트, 배려하는 방식 —<br /><br />
              <span className="text-stone-900 font-black">이런 것들이 3박 4일 안에<br />자연스럽게 드러납니다.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
