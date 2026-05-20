'use client'

import { useEffect, useRef, useState } from 'react'

export function SlideScrubber() {
  const [thumb, setThumb] = useState({ left: 0, width: 0 })
  const trackRef = useRef<HTMLButtonElement>(null)
  const draggingRef = useRef(false)

  useEffect(() => {
    const deck = document.querySelector<HTMLElement>('.deck')
    if (!deck) return

    const update = () => {
      const total = deck.scrollWidth
      if (total <= 0) return
      const width = deck.clientWidth / total
      const left = deck.scrollLeft / total
      setThumb({ left, width })
    }
    update()
    deck.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      deck.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollTo = (clientX: number) => {
    const track = trackRef.current
    const deck = document.querySelector<HTMLElement>('.deck')
    if (!track || !deck) return
    const rect = track.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    const max = deck.scrollWidth - deck.clientWidth
    deck.scrollTo({ left: ratio * max, behavior: 'auto' })
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: scrollTo is stable within this component
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return
      scrollTo(e.clientX)
    }
    const onUp = () => {
      draggingRef.current = false
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [])

  return (
    <button
      ref={trackRef}
      type="button"
      className="slide-scrubber"
      aria-label="Slide position"
      onPointerDown={(e) => {
        draggingRef.current = true
        e.currentTarget.setPointerCapture(e.pointerId)
        scrollTo(e.clientX)
      }}
    >
      <span
        className="slide-scrubber__fill"
        style={{ left: `${thumb.left * 100}%`, width: `${thumb.width * 100}%` }}
      />
    </button>
  )
}
