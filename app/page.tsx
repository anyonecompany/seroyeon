'use client'

import { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import Hero from '@/app/components/sections/Hero'
import PainPoint from '@/app/components/sections/PainPoint'
import CampIntro from '@/app/components/sections/CampIntro'
import BeforeAfter from '@/app/components/sections/BeforeAfter'
import Comparison from '@/app/components/sections/Comparison'
import Timeline from '@/app/components/sections/Timeline'
import Science from '@/app/components/sections/Science'
import Pricing from '@/app/components/sections/Pricing'
import FAQ from '@/app/components/sections/FAQ'
import Closing from '@/app/components/sections/Closing'
import Footer from '@/app/components/Footer'
import FloatingCTA from '@/app/components/FloatingCTA'
import FloatingChatButton from '@/app/components/FloatingChatButton'
import FormModal from '@/app/components/FormModal'
import SuccessModal from '@/app/components/SuccessModal'
import { event as gtagEvent } from '@/app/lib/gtag'
import { event as pixelEvent } from '@/app/lib/pixel'

export default function LandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const scrollTracked = useRef<Set<number>>(new Set())

  const handleFormOpen = useCallback(() => {
    gtagEvent('form_open', {})
    pixelEvent('InitiateCheckout')
    setIsFormOpen(true)
  }, [])

  const handleFormClose = () => {
    setIsFormOpen(false)
  }

  const handleFormSuccess = () => {
    setIsFormOpen(false)
    setIsSuccessOpen(true)
  }

  // Scroll depth tracking (GA4) + S5 ViewContent (Pixel)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPct = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      ;[25, 50, 75].forEach((threshold) => {
        if (scrollPct >= threshold && !scrollTracked.current.has(threshold)) {
          scrollTracked.current.add(threshold)
          gtagEvent('scroll_depth', { depth: String(threshold) })
        }
      })

      // S5 (Timeline) 도달 시 Pixel ViewContent
      if (scrollPct >= 60 && !scrollTracked.current.has(60)) {
        scrollTracked.current.add(60)
        pixelEvent('ViewContent')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="w-full pb-24">
      <Hero onCtaClick={handleFormOpen} />
      <div id="painpoint-section">
        <PainPoint />
      </div>
      <CampIntro />
      <div id="beforeafter-section">
        <BeforeAfter onCtaClick={handleFormOpen} />
      </div>
      <Comparison />
      <Timeline />
      <Science />
      <Pricing onCtaClick={handleFormOpen} />
      <FAQ />
      <div id="closing-section">
        <Closing onCtaClick={handleFormOpen} />
      </div>
      <Footer />

      <FloatingChatButton />
      <FloatingCTA onCtaClick={handleFormOpen} isModalOpen={isFormOpen || isSuccessOpen} />
      <Suspense fallback={null}>
        <FormModal isOpen={isFormOpen} onClose={handleFormClose} onSuccess={handleFormSuccess} />
      </Suspense>
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </main>
  )
}
