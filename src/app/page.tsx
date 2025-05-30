'use client'

import NavBar from '../components/nav-bar'
import GtKM from '../components/gtkm-scroll'
import TraitTag from '../components/trait-tag'
import FAQ from '../components/faq'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Values from '@/components/values'

const Page = () => {
  return (
    <div className="mt-8 text-white px-8">
      {/* Navbar */}
      <div className="sticky top-4 z-50 backdrop-blur-md">
        <div className="flex justify-center mb-10">
          <NavBar />
        </div>
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
              <Image
                src="/general/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="hover:brightness-125 transition"
              />
            </a>
            <a href="https://instagram.com" target="_blank">
              <Image
                src="/general/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="hover:brightness-125 transition"
              />
            </a>
            <a href="https://github.com" target="_blank">
              <Image
                src="/general/github.png"
                alt="GitHub"
                width={24}
                height={24}
                className="hover:brightness-125 transition"
              />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              className="flex items-center gap-2 hover:brightness-125 transition"
            >
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
      <h1 className="flex-justify-center mt-25 text-white text-[50px] font-medium text-center">
        Get to Know Me
      </h1>

      {/* Scrollable MBTI */}
      <div className="flex justify-center mt-5 ml-20">
        <GtKM />
      </div>

      {/* Values */}
      <h1 className='flex justify-center mt-50 text-6xl font-semibold'>
          Core Values
      </h1>

      <h3 className="flex justify-center mt-1 text-[#D4FFA9] text-l italic">
          as my strong characteristics
      </h3>

      <div className='flex justify-center mt-10'>
        <Values />
      </div>

      <h3 className="flex justify-center mt-5 text-[#D4FFA9] text-l italic">
          My friends said I'm...
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        <TraitTag />
      </div>

      <div className='mt-10 pb-22'>
        <FAQ/>
      </div>


    
    </div>
  )
}

export default Page
