// Server Component — NO 'use client'

export default function PainPoint() {
  return (
    <section className="py-16 px-6 bg-white border-t border-stone-200">
      <div className="max-w-[480px] mx-auto">
        <h2 className="text-[2rem] font-black mb-12 text-center text-stone-900 leading-tight">
          혹시, 이런 생각<br />해본 적 있으세요?
        </h2>

        <div className="space-y-8 mb-8">
          <blockquote className="border-l-2 border-[#FF6321] pl-5 py-1">
            <p className="text-base font-medium text-stone-600 whitespace-pre-line">
              소개팅 앱에서 프로필만 보고{'\n'}판단하고 판단당하는 피로한 반복
            </p>
            <p className="text-xs font-medium text-stone-400 mt-2">— 29세, 직장인</p>
          </blockquote>
        </div>

        <div className="text-center py-8 border-t border-b border-stone-200 mb-8">
          <p className="text-base font-medium text-stone-500">30대 미혼의</p>
          <p className="text-2xl font-bold text-[#FF6321] my-2">53%</p>
          <p className="text-base font-medium text-stone-900">&quot;만날 기회 자체가 없다&quot;</p>
          <p className="text-xs font-medium text-stone-400 mt-2">— 2024 통계청</p>
        </div>

        <div className="space-y-8">
          <blockquote className="border-l-2 border-[#FF6321] pl-5 py-1">
            <p className="text-base font-medium text-stone-600 whitespace-pre-line">
              결혼정보회사에 300만 원 냈는데{'\n'}30분씩 3번 만난 게 전부인 허탈함
            </p>
            <p className="text-xs font-medium text-stone-400 mt-2">— 33세, 전문직</p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
