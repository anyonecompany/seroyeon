// Server Component

import { Check } from 'lucide-react'

const trustItems = [
  '신원이 확인된 참가자만 참여합니다',
  '안전하고 쾌적한 숙소에서 진행됩니다',
  '참가비가 있어 진지한 분들만 모입니다',
]

export default function ParentTrust() {
  return (
    <section className="py-16 px-6 bg-white border-t border-stone-200">
      <div className="max-w-[480px] mx-auto">
        <h2 className="text-2xl font-bold text-stone-900 mb-3 text-center leading-tight">
          부모님이 물어보셔도,
          <br />
          자신 있게 말할 수 있는 프로그램
        </h2>
        <p className="text-base font-medium text-stone-500 mb-8 text-center">
          진지한 결혼 준비를 응원받을 수 있도록.
        </p>

        <div className="space-y-4 mb-8">
          {trustItems.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-stone-50 rounded-xl p-4">
              <Check size={20} className="text-[#FF6321] shrink-0 mt-0.5" />
              <p className="text-base font-medium text-stone-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="bg-stone-900 rounded-2xl p-6 text-center">
          <p className="text-base font-medium text-stone-300 leading-relaxed">
            &quot;딸이 결혼 준비한다고 하면,
            <br />
            응원해주고 싶으시잖아요.&quot;
          </p>
          <p className="text-sm font-medium text-stone-500 mt-3">
            결혼을 진지하게 생각하는 사람들이
            <br />
            모이는 프로그램입니다.
          </p>
        </div>
      </div>
    </section>
  )
}
