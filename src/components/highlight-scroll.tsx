'use client'
import { useRef, useEffect } from 'react'

const values = [
  {
    title: 'Tanoto Scholarship Association ITB',
    image: '/general/TSA.jpg',
    content:
      "A family and a wholesome support system! Thought it's mpre than just a scholarship: it's a place where I grow, reflect, and full of insightful people.",
  },
  {
    title: 'Mentor OSKM ITB 2023: Nitra Abitara!',
    image: '/general/keluarga_oskm.jpg',
    content:
      "A really memorable moment in August 2024 is being a mentor for OSKM ITB! It was way out of my comfort zone, but surprisingly exciting. Challenging? Yes. Worth it? Definitely. 10/10 experience.",
  },
  {
    title: 'Cipher - HMIF ITB',
    image: '/general/SPARTA.jpg',
    content:
      "Fast-paced. High pressure. Full of high achievers. Honestly, I doubted if I belonged here. It wasn’t my first choice, but I’m genuinely glad I stayed. Growth happens where you're stretched.",
  },
  {
    title: 'Asrama ITB',
    image: '/general/ASRAMA.jpg',
    content: 
      "Asrama is where everything began. The warmth, the chaos, the late-night talks, and us shared struggles. It taught me how to live with people, and more important, how to live with myself.",
  },
]

const Highlight = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  let isDown = false
  let startX = 0
  let scrollLeft = 0

  useEffect(() => {
    const slider = scrollRef.current
    if (!slider) return

    const mouseDown = (e: MouseEvent) => {
      isDown = true
      slider.classList.add('cursor-grabbing')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const mouseLeave = () => {
      isDown = false
      slider.classList.remove('cursor-grabbing')
    }

    const mouseUp = () => {
      isDown = false
      slider.classList.remove('cursor-grabbing')
    }

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 1.5
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener('mousedown', mouseDown)
    slider.addEventListener('mouseleave', mouseLeave)
    slider.addEventListener('mouseup', mouseUp)
    slider.addEventListener('mousemove', mouseMove)

    return () => {
      slider.removeEventListener('mousedown', mouseDown)
      slider.removeEventListener('mouseleave', mouseLeave)
      slider.removeEventListener('mouseup', mouseUp)
      slider.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto flex snap-x snap-mandatory scroll-smooth space-x-6 cursor-grab select-none hide-scrollbar"
    >
      {values.map((item, index) => (
        <div
          key={index}
          className="snap-start shrink-0 w-[504px] bg-[#464040]/30 rounded-[18] p-6 flex flex-col"
        >
          <div className="w-full aspect-[3/2] rounded-[16] overflow-hidden bg-black">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white mt-4 font-poppins">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-[16px] font-normal leading-normal">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Highlight
