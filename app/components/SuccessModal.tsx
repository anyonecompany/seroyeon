'use client'

import { Check } from 'lucide-react'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white w-full max-w-[400px] rounded-3xl overflow-hidden p-8 text-center">
        <div className="w-16 h-16 bg-[#FF6321]/10 text-[#FF6321] rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} strokeWidth={3} />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">등록이 완료되었습니다!</h2>
        <p className="text-base font-medium text-stone-600 mb-2 leading-relaxed">
          24시간 내 안내 문자를 보내드리겠습니다.
        </p>
        <p className="text-base font-medium text-stone-600 mb-8 leading-relaxed">
          등록 순서에 따라 우선 안내됩니다.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#FF6321] hover:bg-[#E55A1E] text-white text-base font-medium py-4 rounded-xl transition-transform active:scale-95"
        >
          확인
        </button>
      </div>
    </div>
  )
}
