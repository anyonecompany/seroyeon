'use client'

import { useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { supabase } from '@/app/lib/supabase'
import { event as gtagEvent } from '@/app/lib/gtag'
import { event as pixelEvent } from '@/app/lib/pixel'

interface FormModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 3) return digits
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
}

export default function FormModal({ isOpen, onClose, onSuccess }: FormModalProps) {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [name, setName] = useState('')
  const [gender, setGender] = useState<string>('')
  const [birthDate, setBirthDate] = useState('')
  const [phone, setPhone] = useState('')

  const isValid = useCallback(() => {
    return (
      name.trim().length >= 2 &&
      gender !== '' &&
      /^\d{6}$/.test(birthDate) &&
      /^010-\d{4}-\d{4}$/.test(phone)
    )
  }, [name, gender, birthDate, phone])

  const validate = () => {
    const errs: Record<string, string> = {}
    if (name.trim().length < 2) errs.name = '이름을 2자 이상 입력해주세요.'
    if (!gender) errs.gender = '성별을 선택해주세요.'
    if (!/^\d{6}$/.test(birthDate)) {
      errs.birthDate = '생년월일 6자리를 정확히 입력해주세요.'
    } else {
      const month = parseInt(birthDate.slice(2, 4), 10)
      const day = parseInt(birthDate.slice(4, 6), 10)
      if (month < 1 || month > 12 || day < 1 || day > 31) {
        errs.birthDate = '생년월일 6자리를 정확히 입력해주세요.'
      }
    }
    if (!/^010-\d{4}-\d{4}$/.test(phone)) errs.phone = '010-XXXX-XXXX 형식으로 입력해주세요.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      const utmParams: Record<string, string> = {}
      ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
        const val = searchParams.get(key)
        if (val) utmParams[key] = val
      })

      if (!supabase) throw new Error('Supabase not configured')
      const { error } = await supabase.from('registrations').insert({
        name: name.trim(),
        gender,
        birth_date: birthDate,
        phone,
        ...utmParams,
      })

      if (error) throw error

      gtagEvent('form_submit', {})
      pixelEvent('Lead')

      setName('')
      setGender('')
      setBirthDate('')
      setPhone('')
      setErrors({})
      onSuccess()
    } catch (err) {
      console.error('Registration error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    gtagEvent('form_close', {})
    onClose()
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black/60 p-0 sm:p-4">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-white w-full max-w-[400px] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-stone-200 flex justify-between items-start bg-white sticky top-0 z-10">
              <div>
                <Image
                  src="/images/logo-mark.png"
                  alt="서로연"
                  width={96}
                  height={24}
                  className="h-6 w-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-stone-900">1기 우선 참여 자격 확보</h2>
              </div>
              <button onClick={handleClose} className="p-2 -mr-2 text-stone-400 hover:text-stone-900 bg-white rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-2">이름</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6321]/50 focus:border-[#FF6321] transition-colors"
                    placeholder="실명을 입력해주세요"
                  />
                  {errors.name && <p className="text-xs font-medium text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-2">성별</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['남성', '여성'] as const).map((g) => {
                      const value = g === '남성' ? 'male' : 'female'
                      const selected = gender === value
                      return (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGender(value)}
                          className={`py-3 rounded-xl text-center text-base font-medium border transition-colors ${
                            selected
                              ? 'bg-[#FF6321] text-white border-[#FF6321]'
                              : 'bg-white text-stone-900 border-stone-200'
                          }`}
                        >
                          {g}
                        </button>
                      )
                    })}
                  </div>
                  {errors.gender && <p className="text-xs font-medium text-red-500 mt-1">{errors.gender}</p>}
                </div>

                {/* Birth Date */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-2">생년월일</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6321]/50 focus:border-[#FF6321] transition-colors"
                    placeholder="생년월일 6자리 (예: 950315)"
                  />
                  {errors.birthDate && <p className="text-xs font-medium text-red-500 mt-1">{errors.birthDate}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-2">전화번호</label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6321]/50 focus:border-[#FF6321] transition-colors"
                    placeholder="010-0000-0000"
                  />
                  <p className="text-xs font-medium text-stone-400 mt-1">선발 결과 안내용으로만 사용됩니다</p>
                  {errors.phone && <p className="text-xs font-medium text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading || !isValid()}
                    className={`w-full text-base font-medium py-4 rounded-xl active:scale-95 transition-all ${
                      isValid() && !loading
                        ? 'bg-[#FF6321] hover:bg-[#E55A1E] text-white'
                        : 'bg-stone-300 text-white cursor-not-allowed'
                    }`}
                  >
                    {loading ? '등록 중...' : '무료 사전 등록 완료하기'}
                  </button>
                  <p className="text-center text-xs font-medium text-stone-400 mt-3">
                    결제 정보를 요구하지 않습니다
                  </p>
                  <p className="text-center text-xs font-medium text-stone-500 mt-2">
                    ※ 등록 후 24시간 내 안내 문자를 보내드립니다
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
