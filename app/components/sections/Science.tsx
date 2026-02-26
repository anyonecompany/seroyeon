// Server Component

export default function Science() {
  return (
    <section className="py-20 px-6 bg-white border-t border-stone-200">
      <div className="max-w-[480px] mx-auto">
        <h2 className="text-[2rem] font-black mb-4 text-center text-stone-900 leading-tight">
          왜 3박 4일인가?
        </h2>
        <p className="text-center text-base font-medium text-stone-500 mb-12">
          뇌가 사랑에 빠지는 데는<br />과학적 이유가 있습니다.
        </p>

        <div className="space-y-10 mb-12">
          <div>
            <blockquote className="border-l-2 border-[#FF6321] pl-5 py-1 mb-4">
              <p className="text-base font-medium text-stone-900 mb-3">&quot;흔들다리 실험&quot;</p>
              <p className="text-base font-medium text-stone-600 leading-relaxed">
                1974년, 심리학자 Dutton &amp; Aron은 심장이 뛸 때 만난 사람에게 더 강한 매력을 느낀다는 것을 증명했습니다.
              </p>
            </blockquote>
            <p className="text-base font-medium text-stone-500 pl-5">
              → 서로연의 Day 1 &quot;아드레날린 미션&quot;은 이 원리로 설계되었습니다.
            </p>
          </div>

          <div>
            <blockquote className="border-l-2 border-[#FF6321] pl-5 py-1 mb-4">
              <p className="text-base font-medium text-stone-900 mb-3">&quot;36가지 질문 실험&quot;</p>
              <p className="text-base font-medium text-stone-600 leading-relaxed">
                1997년, 심리학자 Arthur Aron은 36개의 질문만으로 낯선 두 사람 사이에 깊은 친밀감을 형성할 수 있음을 증명했습니다.
              </p>
            </blockquote>
            <p className="text-xs font-medium text-stone-400 pl-5">
              (NYT 바이럴 기사 &quot;To Fall in Love With Anyone, Do This&quot;의 원본 연구)
            </p>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 text-center">
          <p className="text-base font-medium text-stone-500">서로연의 프로그램은</p>
          <p className="text-2xl font-bold text-[#FF6321] my-2">50편</p>
          <p className="text-base font-medium text-stone-900">뇌과학 논문을 기반으로 설계되었습니다.</p>
        </div>
      </div>
    </section>
  )
}
