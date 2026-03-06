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
    <section className="relative h-[100dvh] w-full bg-stone-900 text-white overflow-hidden">
      {/* 배경 이미지 */}
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
        {/* 하단 75% 다크 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent" />
      </div>

      {/* 콘텐츠 — 하단 정렬 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full max-w-[480px] mx-auto flex flex-col justify-end pt-[44px] px-6"
      >
        {/* 헤드카피 */}
        <h1 className="text-[32px] font-bold leading-[1.5] text-white">
          설레는 게 당연합니다.
          <br />
          이 만남이 진짜일 수 있으니까요.
        </h1>

        {/* 서브카피 */}
        <p className="mt-5 text-[17px] leading-[1.75] text-white/85">
          잘 맞는 사람은 3시간이 아니라
          <br />
          72시간을 함께해야 알 수 있습니다.
          <br />
          <br />
          딱 한 번만, 3박 4일을 진심으로 써보세요.
        </p>

        {/* USP 한 줄 */}
        <p className="mt-5 text-sm font-bold text-[#FF6321]">
          연봉·직업·조건은 묻지 않습니다. 사람만 봅니다.
        </p>

        {/* 신뢰 배지 */}
        <p className="mt-4 text-xs text-white/60">
          👥 단 10명 소수 정예 &middot; 🧠 뇌과학 기반 설계 &middot; 🔒 무료 사전 예약
        </p>

        {/* CTA 버튼 */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={handleCta}
          className="mt-5 w-[88%] mx-auto h-[58px] bg-[#E04F10] hover:bg-[#C9440D] text-white text-lg font-bold rounded-2xl shadow-[0_4px_20px_rgba(255,99,33,0.4)] transition-transform active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          내 자리 확인하기 →
        </motion.button>

        {/* 마이크로카피 */}
        <p className="mt-2.5 text-xs text-white/60 text-center">
          지금은 자리만 예약합니다 &middot; 참가비 79만원은 등록 후 별도 안내드려요
        </p>

        <div className="mb-8 pb-[env(safe-area-inset-bottom)]" />
      </motion.div>
    </section>
  )
}
