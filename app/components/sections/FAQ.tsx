'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { category: '비용', q: '환불이 가능한가요?', a: '캠프 14일 전: 전액 환불\n캠프 7일 전: 50% 환불\n캠프 미개최 시: 전액 환불 (보증금 포함)' },
  { category: '안전', q: '안전한가요? 개인정보가 걱정됩니다.', a: '참가자 전원 신분 확인 + 비밀유지 서약(NDA) 체결. 프로그램 중 무단 촬영 금지. 숙소는 1인 1실. 콘텐츠 활용은 사후 개별 동의를 받는 경우에만 진행합니다.' },
  { category: '참가자', q: '참가자는 어떤 사람들인가요?', a: "30~42세, 진지하게 결혼을 고려하는 미혼 남녀입니다. 모든 참가자는 운영진의 1:1 사전 인터뷰를 통과해야 합니다. 신분증 확인 + 결혼 의향 확인 + 프로필 심사를 거칩니다. '그냥 놀러 오는 사람'은 걸러집니다." },
  { category: '방식', q: '직업을 안 밝히면 어떻게 상대를 판단하나요?', a: '그것이 서로연의 핵심입니다. 3박 4일 동안 함께 미션을 수행하고, 깊은 대화를 나누고, 예상치 못한 상황에서 반응하는 모습을 보면 이력서보다 정확한 판단이 가능합니다. 직업은 매칭 이후에 공개됩니다.' },
  { category: '프로그램', q: '3박 4일이면 진짜 사람을 알 수 있나요?', a: '소개팅 30분으로는 불가능합니다.\n하지만 72시간 동안 함께 미션을 수행하고, 36가지 깊은 질문을 나누고, 예상치 못한 상황에서 반응하는 모습을 보면 — 이력서 10장보다 정확한 판단이 가능합니다.\n\n실제로 1997년 Arthur Aron 연구에서는 45분의 구조화된 질문만으로도 낯선 두 사람이 깊은 친밀감을 형성했습니다. 서로연은 그 45분을 72시간으로 확장한 것입니다.' },
  { category: '매칭', q: '매칭이 안 되면요?', a: '미선발 시 보증금은 전액 환불 또는 이월 중 선택 가능합니다.\n이월 선택 시: 2기 우선 선발권 + 99만 원 특별가가 보장됩니다.\n1기 참여자는 7월 정식 서비스 론칭 시 창립 멤버로 우선 초대됩니다.' },
]

export default function FAQ() {
  const [openIdxs, setOpenIdxs] = useState<Set<number>>(new Set([0, 1]))

  const toggleIdx = (idx: number) => {
    setOpenIdxs((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
      }
      return next
    })
  }

  return (
    <section className="py-16 px-6 bg-white border-t border-stone-200">
      <div className="max-w-[480px] mx-auto">
        <h2 className="text-[2rem] font-black mb-12 text-center text-stone-900 leading-tight">
          걱정되는 부분,<br />미리 답합니다
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdxs.has(i)
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-white border-stone-700' : 'bg-white border-stone-200'
                }`}
              >
                <button
                  onClick={() => toggleIdx(i)}
                  className="w-full text-base font-medium text-stone-900 p-5 flex justify-between items-center text-left"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <span className="text-xs font-medium text-[#FF6321]">{faq.category}</span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-base font-medium text-stone-600 leading-relaxed whitespace-pre-line">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
