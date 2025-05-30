'use client'

import NavBar from '@/components/nav-bar'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white px-8 py-8">
      {/* Navbar */}
      <div className="sticky top-4 z-50 backdrop-blur-md flex justify-center mb-10">
        <NavBar />
      </div>

      <div className="flex justify-center">
        <Image 
          src="/general/song.png" 
          alt="Git’s Recently Played" 
          width={1000}
          height={400} 
        />
      </div>
    </div>
  )
}

export default Page
