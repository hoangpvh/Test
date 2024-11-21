import { render, screen } from '@testing-library/react'
import React from 'react'

import TechRow from '@/components/molecules/banner/TechRow'

describe('TechRow Component', () => {
  const mockLogos = [
    { name: 'react', alt: 'React Logo' },
    { name: 'typescript', alt: 'TypeScript Logo' },
    { name: 'nextjs', alt: 'Next.js Logo' },
  ]

  describe('TechRow Rendering', () => {
    it('should render all logos', () => {
      render(<TechRow logos={mockLogos} />)

      mockLogos.forEach((logo) => {
        const img = screen.getByAltText(logo.alt!)
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute(
          'src',
          expect.stringContaining(`${logo.name}.svg`)
        )
      })
    })

    it('should render with default alt text if not provided', () => {
      const logosWithoutAlt = [{ name: 'react' }]
      render(<TechRow logos={logosWithoutAlt} />)

      const img = screen.getByAltText('Technology Logo')
      expect(img).toBeInTheDocument()
    })

    it('should apply custom className', () => {
      const customClass = 'custom-class'
      render(<TechRow logos={mockLogos} className={customClass} />)

      const container = screen.getByTestId('tech-row')
      expect(container).toHaveClass(customClass)
    })

    it('should render with correct container styles', () => {
      render(<TechRow logos={mockLogos} />)

      const container = screen.getByTestId('tech-row')
      expect(container).toHaveClass(
        'h-10 flex justify-between items-center -z-10'
      )
    })
  })

  describe('TechLogo Component', () => {
    it('should render each logo with correct styles', () => {
      render(<TechRow logos={mockLogos} />)

      const logoContainers = screen.getAllByTestId('tech-logo')

      logoContainers.forEach((container) => {
        expect(container).toHaveClass(
          'w-10 h-10 p-1.5 bg-white rounded border border-neutral-border flex flex-col justify-center items-center gap-2.5'
        )
      })
    })

    it('should render images with correct attributes', () => {
      render(<TechRow logos={mockLogos} />)

      const images = screen.getAllByRole('img')

      images.forEach((img) => {
        expect(img).toHaveAttribute('width', '60')
        expect(img).toHaveAttribute('height', '60')
        expect(img).toHaveClass('object-contain')
      })
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty logos array', () => {
      render(<TechRow logos={[]} />)

      const container = screen.getByTestId('tech-row')
      expect(container.children).toHaveLength(0)
    })

    it('should handle single logo', () => {
      const singleLogo = [{ name: 'react', alt: 'React Logo' }]
      render(<TechRow logos={singleLogo} />)

      const logoContainers = screen.getAllByTestId('tech-logo')
      expect(logoContainers).toHaveLength(1)
    })
  })
})
