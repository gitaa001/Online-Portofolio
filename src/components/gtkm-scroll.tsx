'use client'
import { useRef, useEffect } from 'react'

const GtKM = () => {
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
      const walk = (x - startX) * 1.5 // scroll speed
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
      <div className="snap-start shrink-0 flex items-center justify-center w-[700px]">
        <img
          src="/general/mbti.png"
          width={700}
          height={500}
          alt="MBTI"
          className="rounded-xl"
        />
      </div>
      <div className="snap-start shrink-0 flex items-end justify-center w-[700px]">
        <img
          src="/general/colpersona.png"
          width={700}
          height={300}
          alt="Color Persona"
          className="rounded-xl"
        />
      </div>
      <div className="snap-start shrink-0 flex items-center justify-center w-[700px]">
        <img
          src="/general/mbti.png"
          width={700}
          height={500}
          alt="MBTI Again"
          className="rounded-xl"
        />
      </div>
    </div>
  )
}

export default GtKM
