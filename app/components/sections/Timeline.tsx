'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const days = [
  {
    day: 1,
    label: 'DAY 1',
    title: '심장이 기억하는 첫 만남',
    desc: '스포트라이트 속 30초 자기소개. 그리고 심장 뛰는 아드레날린 미션.',
    img: '/images/timeline/day1-campfire.png',
    ending: '6명의 첫인상이 생깁니다. 그 중 1~2명에게 심장이 뛴 걸 느끼게 됩니다.',
    review: '"처음엔 어색했는데, 두 번째 활동부터 자연스러워졌어요"',
  },
  {
    day: 2,
    label: 'DAY 2',
    title: '누군가 당신에게\n편지를 보냈습니다',
    desc: '36가지 질문으로 겉이 아닌 속을 봅니다. 그리고 밤, 가면 파티.',
    img: '/images/timeline/day2-conversation.png',
    ending: '첫인상과 다른 누군가를 발견합니다. "이 사람 이런 사람이었어?"라는 놀라움.',
    review: '"편지를 받았을 때 진심이 느껴져서 울컥했어요"',
  },
  {
    day: 3,
    label: 'DAY 3',
    title: '예상치 못한 반전.',
    desc: '뜻밖의 사람과 깊은 대화를 나누는 시간. 그리고... 최종 선택.',
    img: '/images/timeline/day3-nightwalk.png',
    ending: '예상 밖의 사람에게 마음이 열립니다. 겉으로는 몰랐던 매력을, 이 날 밤 처음 발견하게 됩니다.',
    special: true,
    review: '"대화하면서 이 사람이 완전히 달라 보였어요"',
  },
  {
    day: 4,
    label: 'DAY 4',
    title: '최종 선택과 100일 프로젝트',
    desc: '매칭된 커플에게는 100일 프로젝트가, 결혼에 성공하면 축하금 200만 원이 기다립니다.',
    img: '/images/timeline/day4-sunrise.png',
    ending: '"이 사람이다"라는 확신이 생깁니다. 혹은 "아직은 아니다"라는 명확한 답. 어느 쪽이든, 소개팅 100번보다 확실한 답입니다.',
    review: '"3박 4일이 인생에서 가장 솔직했던 시간이었어요"',
  },
]

export default function Timeline() {
  const [openDays, setOpenDays] = useState<Set<number>>(new Set([0]))

  const toggleDay = (idx: number) => {
    setOpenDays((prev) => {
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
    <section className="py-16 px-6 bg-stone-900 text-white">
      <div className="max-w-[480px] mx-auto">
        <h2 className="text-[2rem] font-black mb-12 text-center leading-tight">
          3박 4일,<br />당신에게 일어나는 일.
        </h2>

        <div className="space-y-4">
          {days.map((d, idx) => {
            const isOpen = openDays.has(idx)
            return (
              <div
                key={d.day}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  d.special && !isOpen
                    ? 'bg-stone-800 border-[#FF6321]/40'
                    : isOpen
                      ? 'bg-stone-800 border-stone-600'
                      : 'bg-stone-800 border-stone-700'
                }`}
              >
                <button
                  onClick={() => toggleDay(idx)}
                  className="w-full p-5 flex items-center gap-4 text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF6321] text-white font-black text-base flex items-center justify-center shrink-0">
                    {d.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#FF6321] text-xs font-medium tracking-widest mb-1">{d.label}</p>
                    <p className="text-base font-medium leading-snug truncate">{d.title.replace('\n', ' ')}</p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-5">
                    <div className="ml-14">
                      <p className="text-base font-medium text-stone-400 leading-relaxed mb-4 whitespace-pre-line">{d.desc}</p>

                      <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                        <Image
                          src={d.img}
                          alt={`DAY ${d.day}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 480px) 100vw, 400px"
                          loading="eager"
                        />
                      </div>

                      <div className="bg-stone-700 border border-stone-600 rounded-2xl p-6 mb-3">
                        <p className="text-xs font-medium text-stone-500 tracking-widest uppercase mb-2">이 날이 끝나면</p>
                        <p className="text-base font-medium text-stone-300 leading-relaxed">{d.ending}</p>
                      </div>

                      <p className="text-xs font-medium text-stone-400 italic">{d.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
