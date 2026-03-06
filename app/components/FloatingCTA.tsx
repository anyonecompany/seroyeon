'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { event as gtagEvent } from '@/app/lib/gtag'

interface FloatingCTAProps {
  onCtaClick: () => void
  isModalOpen: boolean
}

export default function FloatingCTA({ onCtaClick, isModalOpen }: FloatingCTAProps) {
  const [show, setShow] = useState(false)
  const [hideForClosing, setHideForClosing] = useState(false)

  useEffect(() => {
    // Show after 30% scroll
    const handleScroll = () => {
      const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPct >= 0.3) {
        setShow(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Hide when Closing section is visible
    const closingTarget = document.getElementById('closing-section')
    let hideObs: IntersectionObserver | undefined
    if (closingTarget) {
      hideObs = new IntersectionObserver(
        ([entry]) => {
          setHideForClosing(entry.isIntersecting)
        },
        { threshold: 0.1 }
      )
      hideObs.observe(closingTarget)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      hideObs?.disconnect()
    }
  }, [])

  const handleCta = () => {
    gtagEvent('cta_click', { location: 'floating' })
    onCtaClick()
  }

  const visible = show && !isModalOpen && !hideForClosing

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-3 left-0 right-0 z-40 px-4 pb-[env(safe-area-inset-bottom)]"
        >
          <div className="max-w-[480px] mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg px-4 pt-3 pb-4">
            <p className="text-xs font-medium text-[#FF6321] text-center mb-2">100명+ 등록 중</p>
            <button
              onClick={handleCta}
              className="w-full bg-[#FF6321] hover:bg-[#E55A1E] text-white text-base font-medium py-4 rounded-xl active:scale-95 transition-transform"
            >
              무료 사전 등록
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
