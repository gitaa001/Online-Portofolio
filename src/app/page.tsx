'use client'

import NavBar from '../components/nav-bar'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Page = () => {
  return (
    <div className="mt-8 text-white px-8">
      {/* Navbar */}
      <div className="flex justify-center mb-10">
        <NavBar />
      </div>

      {/* Main Intro */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
        <div className="max-w-xl">
          <p className="text-[28px]">Hello everyone! It’s me,</p>

          <h1 className="text-5xl font-semibold py-4 px-2 mt-4 bg-[#D4FFA9] text-black inline-block">
            <TypeAnimation
              sequence={['Anggita Najmi Layali', 1000, 'Anggita Najmi Layali', 1000]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </h1>

          <p className="mt-6 text-[#D4FFA9] text-lg">
            Life motto: <em className="italic">a lifetime learner</em>
          </p>

          <p className="mt-4 text-base text-gray-200 leading-relaxed">
            Usually known as <strong className="text-white">Gita</strong>. I’m a tech enthusiast with a heart for arts,
            currently studying <span className="text-[#D4FFA9] font-medium">Information System and Technology</span> at Institut Teknologi Bandung.
          </p>

          <p className="mt-4 text-base text-gray-200 leading-relaxed">
            Rather than a glass, I see myself as a plate: as a generalist, I love to try new things and soak up a bit of everything.
            You can often find me reading or writing thoughts on Medium.
          </p>

          {/* Socmed icons */}
          <div className="flex items-center gap-5 mt-6">
            <a href="https://linkedin.com" target="_blank">
              <Image src="/general/linkedin.png" alt="LinkedIn" width={24} height={24} className="hover:brightness-125 transition" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <Image src="/general/instagram.png" alt="Instagram" width={24} height={24} className="hover:brightness-125 transition" />
            </a>
            <a href="https://github.com" target="_blank">
              <Image src="/general/github.png" alt="GitHub" width={24} height={24} className="hover:brightness-125 transition" />
            </a>
            <a href="https://medium.com" target="_blank" className="flex items-center gap-2 hover:brightness-125 transition">
              <Image src="/general/medium.png" alt="Medium" width={100} height={100} />
            </a>
          </div>
        </div>

        {/* Fotoku */}
        <div className="flex justify-center">
          <Image
            src="/general/gt1.png"
            alt="Anggita Najmi Layali"
            width={550}
            height={500}
            className="rounded-b-full grayscale"
          />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center mt-30">
        <h2 className="text-white text-6xl font-semibold text-center">Get to Know Me</h2>
      </div>

      {/* MBTI Container */}
      <div className="flex justify-center mt-10 px-4">
        <div className="w-[1159px] h-[300px] bg-[rgba(80,80,80,0.25)] rounded-[30px] shadow-lg p-10 flex gap-10">
          
          {/* MBTI Image */}
          <div className="flex items-center">
            <Image
              src="/general/mbti.png"
              alt="MBTI Character"
              width={210}
              height={352}
              className="flex-shrink-0"
            />
          </div>

          {/* MBTI Info */}
          <div className="text-[#D4FFA9]">
            <h2 className="text-4xl font-semibold text-white">INFP - A</h2>
            <p className="italic mb-6">Mediator</p>

            {/* Progress Bars */}
            <div className="flex items-center">
            <Image
              src="/general/bar.png"
              alt="MBTI Character"
              width={300}
              height={250}
              className="flex-shrink-0"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
