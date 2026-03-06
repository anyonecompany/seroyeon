// Server Component

import { ChevronRight } from 'lucide-react'

export default function Comparison() {
  const items = [
    { label: '판단 기준', old: '프로필 사진 1장', now: '3박 4일 함께 생활' },
    { label: '정보 공개', old: '직업·연봉 공개', now: '직업 비공개' },
    { label: '만남 시간', old: '1:1 30분 대화', now: '6명과 72시간' },
    { label: '비용', old: '300~600만 원', now: '79만 원 (1기 한정)' },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[480px] mx-auto">
        <h2 className="text-[2rem] font-black mb-12 text-center text-stone-900 leading-tight">
          기존 방식으로는<br />절대 알 수 없던 것들.
        </h2>

        <div className="space-y-3 mb-10">
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto_1fr] items-stretch rounded-2xl overflow-hidden border border-stone-200">
              <div className="bg-stone-100 p-4">
                <p className="text-[10px] font-medium tracking-widest text-stone-400 uppercase mb-2">{item.label}</p>
                <p className="text-sm font-medium text-stone-400 leading-snug">{item.old}</p>
              </div>
              <div className="flex items-center justify-center w-8 bg-stone-50">
                <ChevronRight size={14} className="text-[#FF6321]" />
              </div>
              <div className="bg-white p-4">
                <p className="text-[10px] font-medium tracking-widest text-[#FF6321] uppercase mb-2">서로연</p>
                <p className="text-sm font-bold text-stone-900 leading-snug">{item.now}</p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch rounded-2xl overflow-hidden border border-[#FF6321]/30">
            <div className="bg-stone-100 p-4">
              <p className="text-[10px] font-medium tracking-widest text-stone-400 uppercase mb-2">결과</p>
              <p className="text-sm font-medium text-stone-400 leading-snug">모르겠다</p>
            </div>
            <div className="flex items-center justify-center w-8 bg-stone-50">
              <ChevronRight size={14} className="text-[#FF6321]" />
            </div>
            <div className="bg-[#FF6321]/5 p-4">
              <p className="text-[10px] font-medium tracking-widest text-[#FF6321] uppercase mb-2">서로연</p>
              <p className="text-sm font-bold text-stone-900 leading-snug">&quot;이 사람이다&quot; 또는<br />&quot;아니다&quot;라는 확신</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[2rem] font-black text-stone-900 leading-tight">
            직업을 가리면,<br /><span className="text-[#FF6321]">진짜 그 사람이 보입니다.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
