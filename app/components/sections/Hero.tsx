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
        {/* 하단 다크 그라데이션 — 모바일 야외 가독성 확보 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-5% via-black/90 via-45% to-black/20" />
      </div>

      {/* 콘텐츠 — 하단 정렬 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full max-w-[480px] mx-auto flex flex-col justify-end pt-[44px] px-5"
      >
        {/* 헤드카피 — 압도적 크기로 시선 포착 */}
        <h1 className="text-[36px] font-extrabold leading-[1.25] text-white tracking-tight">
          3박 4일,
          <br />
          설레는 소개팅
        </h1>

        {/* 서브카피 — 헤드와 확실한 크기 차이 */}
        <p className="mt-6 text-[15px] leading-[1.7] text-white/75 font-light">
          나의 평생 동반자를 찾는 시간
        </p>

        {/* USP — 오렌지로 시선 분리 */}
        <p className="mt-6 text-[13px] font-semibold text-[#FF6321] tracking-wide">
          연봉 · 직업 · 조건은 묻지 않습니다. 사람만 봅니다.
        </p>

        {/* 신뢰 배지 — 가장 작고 가벼운 보조 정보 */}
        <div className="mt-4 flex items-center gap-2.5 text-[11px] text-white/50 tracking-wide">
          <span>단 10명 정예</span>
          <span className="w-px h-2.5 bg-white/20" />
          <span>뇌과학 기반 설계</span>
          <span className="w-px h-2.5 bg-white/20" />
          <span>무료 사전 예약</span>
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
        <p className="mt-2.5 text-[13px] text-white/70 text-center">
          지금은 자리만 예약합니다 &middot; 참가비 79만원은 등록 후 별도 안내드려요
        </p>

        <div className="mb-8 pb-[env(safe-area-inset-bottom)]" />
      </motion.div>
    </section>
  )
}
