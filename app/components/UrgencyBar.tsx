export default function UrgencyBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#D14B0F] py-2.5 text-center">
      <p className="text-sm font-bold text-white flex items-center justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        1기 모집 중 &nbsp;·&nbsp; 127명 등록 &nbsp;·&nbsp; 잔여 8자리
      </p>
    </div>
  );
}
