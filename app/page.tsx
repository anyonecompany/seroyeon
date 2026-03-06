'use client'

import { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import Hero from '@/app/components/sections/Hero'
import FounderStory from '@/app/components/sections/FounderStory'
import PainPoint from '@/app/components/sections/PainPoint'
import CampIntro from '@/app/components/sections/CampIntro'
import BeforeAfter from '@/app/components/sections/BeforeAfter'
import Comparison from '@/app/components/sections/Comparison'
import Timeline from '@/app/components/sections/Timeline'
import Science from '@/app/components/sections/Science'
import ParentTrust from '@/app/components/sections/ParentTrust'
import Pricing from '@/app/components/sections/Pricing'
import FAQ from '@/app/components/sections/FAQ'
import Closing from '@/app/components/sections/Closing'
import Footer from '@/app/components/Footer'
import FloatingCTA from '@/app/components/FloatingCTA'
import FloatingChatButton from '@/app/components/FloatingChatButton'
import UrgencyBar from '@/app/components/UrgencyBar'
import FormModal from '@/app/components/FormModal'
import SuccessModal from '@/app/components/SuccessModal'
import { event as gtagEvent } from '@/app/lib/gtag'
import { event as pixelEvent } from '@/app/lib/pixel'

export default function LandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const scrollTracked = useRef<Set<number>>(new Set())
  const viewContentFired = useRef(false)

  const handleFormOpen = useCallback(() => {
    gtagEvent('form_open', {})
    pixelEvent('InitiateCheckout', {
      content_name: '서로연 사전 등록',
      value: 790000,
      currency: 'KRW',
    })
    setIsFormOpen(true)
  }, [])

  const handleFormClose = () => {
    setIsFormOpen(false)
  }

  const handleFormSuccess = () => {
    setIsFormOpen(false)
    setIsSuccessOpen(true)
  }

  // Scroll depth tracking (GA4)
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
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ViewContent pixel on pricing section visibility
  useEffect(() => {
    const pricingEl = document.getElementById('pricing-section')
    if (!pricingEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !viewContentFired.current) {
          viewContentFired.current = true
          pixelEvent('ViewContent', {
            content_name: '서로연 3박4일 결혼 매칭 캠프',
            value: 790000,
            currency: 'KRW',
          })
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(pricingEl)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="w-full">
      <UrgencyBar />
      <Suspense fallback={null}>
        <Hero onCtaClick={handleFormOpen} />
      </Suspense>
      <FounderStory />
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
      <ParentTrust />
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
