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
        <h1 className="text-[32px] font-extrabold leading-[1.35] text-white tracking-tight">
          설레는 게 당연합니다.
          <br />
          이 만남이 진짜일 수 있으니까요.
        </h1>

        {/* 서브카피 */}
        <p className="mt-4 text-base leading-[1.8] text-white/70">
          잘 맞는 사람은 3시간이 아니라
          <br />
          72시간을 함께해야 알 수 있습니다.
        </p>
        <p className="mt-3 text-base leading-[1.8] text-white/90 font-medium">
          딱 한 번만, 3박 4일을 진심으로 써보세요.
        </p>

        {/* USP 한 줄 */}
        <p className="mt-5 text-sm font-bold text-[#FF6321]">
          연봉·직업·조건은 묻지 않습니다. 사람만 봅니다.
        </p>

        {/* 신뢰 배지 */}
        <div className="mt-4 flex items-center gap-3 text-xs text-white/60">
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            단 10명 정예
          </span>
          <span className="w-px h-3 bg-white/30" />
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
            뇌과학 기반 설계
          </span>
          <span className="w-px h-3 bg-white/30" />
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            무료 사전 예약
          </span>
        </div>

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
