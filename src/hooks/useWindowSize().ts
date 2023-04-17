import { useEffect, useState } from 'react'

type WindowSizeType = 'mobile' | 'tablet' | 'desktop'

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSizeType>(
    calculateWindowSize(),
  )

  function calculateWindowSize() {
    if (window.innerWidth > 712) {
      return 'desktop'
    }

    if (window.innerWidth > 480) {
      return 'tablet'
    }

    return 'mobile'
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize(calculateWindowSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
