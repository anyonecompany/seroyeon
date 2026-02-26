// Server Component

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-stone-900 text-xs font-medium text-stone-500 leading-relaxed">
      <div className="max-w-[480px] mx-auto">
        <div className="mb-6">
          <Image
            src="/images/logo-tagline.png"
            alt="서로연 - 평생의 인연을 만드는 곳"
            width={160}
            height={40}
            className="h-10 w-auto invert"
          />
        </div>
        <p className="text-base font-medium text-stone-400 mb-6">스펙 말고, 사람을 봅니다.</p>
        <p>주식회사 애니원컴퍼니</p>
        <p>사업자등록번호: 752-88-03329</p>
        <p>대표: 이건용, 당현송</p>
        <p>문의: contact@anyonecompany.kr</p>
        <p className="mb-6">인스타그램: @seoroyeon_</p>
        <p>&copy; 2026 ANYONECOMPANY., CO. LTD. All rights reserved.</p>
      </div>
    </footer>
  )
}
