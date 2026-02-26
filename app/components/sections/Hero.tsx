'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { event as gtagEvent } from '@/app/lib/gtag'

interface HeroProps {
  onCtaClick: () => void
}

export default function Hero({ onCtaClick }: HeroProps) {
  const handleCta = () => {
    gtagEvent('cta_click', { location: 'hero' })
    onCtaClick()
  }

  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between bg-stone-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-couple.png"
          alt="서로연 커플"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-[480px] mx-auto flex flex-col items-center pt-12 px-6 text-center">
        <Image
          src="/images/logo-mark.png"
          alt="서로연"
          width={120}
          height={32}
          className="h-8 w-auto mb-8 invert"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[2rem] font-black leading-tight mb-5"
        >
          3박 4일,<br />진짜 사람을 만나는 시간
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-base font-medium leading-snug text-stone-300"
        >
          프로필이 아닌 경험으로<br />연결되는 결혼 매칭 캠프
        </motion.p>
      </div>

      <div className="relative z-10 max-w-[480px] mx-auto flex flex-col items-center pb-24 px-6 w-full">
        <p className="text-xs font-medium text-stone-300 mb-6 text-center">
          5/29(목)~6/1(일) · 뇌과학 기반 결혼 매칭 캠프
        </p>

        <p className="flex items-center gap-2 text-xs font-medium text-stone-400 mb-4 text-center">
          <span className="w-2 h-2 bg-[#FF6321] rounded-full inline-block shrink-0" />
          현재 127명 사전 등록 완료
        </p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={handleCta}
          className="w-full bg-[#FF6321] hover:bg-[#E55A1E] text-white text-base font-medium py-4 rounded-xl transition-transform active:scale-95"
        >
          30초 만에 무료 등록하기
        </motion.button>

        <p className="mt-4 text-xs font-medium text-stone-500 text-center">
          결제 없음 · 30초 등록 · 언제든 취소
        </p>
      </div>
    </section>
  )
}
