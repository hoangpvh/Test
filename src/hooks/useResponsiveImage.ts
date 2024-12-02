import { useEffect, useState } from 'react'

interface ImageBreakpoints {
  mobile: string
  tablet: string
  desktop: string
}

export const useResponsiveImage = (images: ImageBreakpoints) => {
  const [currentImage, setCurrentImage] = useState(images.mobile)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setCurrentImage(images.desktop)
      } else if (window.innerWidth >= 840) {
        setCurrentImage(images.tablet)
      } else {
        setCurrentImage(images.mobile)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [images])

  return currentImage
}
