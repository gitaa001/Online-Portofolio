'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-row justify-between bg-[#323232]/80 w-[1296px] py-4 rounded-full items-center">
      <div className="flex flex-row gap-4 pl-8">
        <Link href="/">
          <div
            className={`transition p-2 rounded-full hover:bg-[#D4FFA9] hover:text-black ${
              pathname === '/' ? 'text-[#D4FFA9]-500' : 'text-white'
            }`}
          >
            Home
          </div>
        </Link>
        <Link href="/gallery">
          <div
            className={`transition p-2 rounded-full hover:bg-[#D4FFA9] hover:text-black ${
              pathname === '/gallery' ? 'text-[#D4FFA9]-500' : 'text-white'
            }`}
          >
            Gallery
          </div>
        </Link>
        <Link href="/milestones">
          <div
            className={`transition p-2 rounded-full hover:bg-[#D4FFA9] hover:text-black ${
              pathname === '/milestones' ? 'text-[#D4FFA9]-500' : 'text-white'
            }`}
          >
            Milestones
          </div>
        </Link>
      </div>
      <div className="bg-[#D4FFA9] text-black mr-8 px-8 py-2 rounded-full">
        Git&apos;s Portfolio
      </div>
    </div>
  )
}

export default NavBar
