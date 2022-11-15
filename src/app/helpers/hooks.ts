'use client'

import { useEffect, useState } from 'react'

const MOBILE_WIDTH = 700

interface Size {
  width: number | undefined
  height: number | undefined
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.outerWidth,
        height: window.outerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)
  const size = useWindowSize()

  useEffect(() => {
    setIsMobile(!!(size.width && size.width < MOBILE_WIDTH))
  }, [size])

  return isMobile
}
