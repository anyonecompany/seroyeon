// Server Component

export default function FounderStory() {
  return (
    <section className="py-16 px-6 bg-white border-t border-stone-200">
      <div className="max-w-[480px] mx-auto">
        <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center leading-tight">
          이 캠프를 만든 이유
        </h2>

        <div className="bg-stone-50 rounded-2xl p-6 mb-8">
          <div className="space-y-4 text-base font-medium text-stone-600 leading-relaxed">
            <p>
              결혼정보회사에서 가장 먼저 물어보는 건
              <br />
              연봉과 키였습니다.
            </p>
            <p>
              좋은 사람을 만나고 싶다는 마음은 같은데,
              <br />
              조건표부터 채우는 게 이상했습니다.
            </p>
            <p>
              그래서 조건을 묻지 않는
              <br />
              매칭 프로그램을 만들었습니다.
            </p>
            <p className="text-stone-900 font-bold">
              3박 4일 동안 대화하고, 활동하고,
              <br />
              사람 자체를 알아가는 시간.
            </p>
            <p>
              여기서는 연봉이 아니라,
              <br />
              당신의 이야기가 매력이 됩니다.
            </p>
          </div>
          <p className="text-sm font-medium text-stone-400 mt-6">
            — 서로연 기획팀
          </p>
        </div>

        <div className="text-center">
          <p className="text-base font-medium text-stone-500">
            조건을 먼저 보는 만남이 이상하다고 느꼈습니다.
          </p>
          <p className="text-base font-medium text-stone-500 mt-1">
            그래서 <span className="text-stone-900 font-bold">다른 방법</span>을 만들었습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
