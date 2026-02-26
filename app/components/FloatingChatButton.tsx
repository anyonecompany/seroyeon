'use client'

import { motion } from 'motion/react'

const KAKAO_OPEN_CHAT_URL = 'https://open.kakao.com/o/sU8kovii'

export default function FloatingChatButton() {
  const handleClick = () => {
    if (KAKAO_OPEN_CHAT_URL) {
      window.open(KAKAO_OPEN_CHAT_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-24 right-5 z-40 w-12 h-12 rounded-full bg-[#FEE500] shadow-lg shadow-black/15 flex items-center justify-center active:scale-90 transition-transform"
      aria-label="카카오톡 문의"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.5 6.6-.14.52-.9 3.27-.93 3.48 0 0-.02.16.08.22.1.06.22.02.22.02.29-.04 3.36-2.2 3.87-2.56.72.1 1.48.16 2.26.16 5.52 0 10-3.58 10-7.92S17.52 3 12 3Z"
          fill="#3C1E1E"
        />
      </svg>
    </motion.button>
  )
}
