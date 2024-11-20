import { render, screen } from '@testing-library/react'
import React from 'react'

import ContentSection from '@/components/molecules/banner/ContentSection'

describe('ContentSection Component', () => {
  beforeEach(() => {
    render(<ContentSection />)
  })

  describe('Layout Structure', () => {
    it('should render the main container with correct styles', () => {
      const mainContainer = screen.getByTestId('content-section')
      expect(mainContainer).toHaveClass(
        'w-full h-209 lg:h-206 flex flex-col justify-start items-center lg:gap-10 gap-5'
      )
    })

    it('should render the banner line with correct styles', () => {
      const bannerLine = screen.getByTestId('banner-line')
      expect(bannerLine).toHaveClass(
        'absolute w-54 lg:w-435 h-12 lg:h-24 xl:h-28 sm:h-16 border-l-4 border-primary-default bg-gradient-banner'
      )
    })
  })

  describe('Content Rendering', () => {
    it('should render the main heading text', () => {
      const headingPart1 = screen.getByText('Code with Joy.')
      const headingPart2 = screen.getByText('Innovate with Fun!')

      expect(headingPart1).toBeInTheDocument()
      expect(headingPart2).toBeInTheDocument()
    })

    it('should render the description text', () => {
      const description = screen.getByText(
        'With a commitment to quality and collaboration, we transform ideas into powerful, scalable solutions designed to propel your business forward.'
      )
      expect(description).toBeInTheDocument()
    })

    it('should style the heading text correctly', () => {
      const headingContainer = screen.getByTestId('heading-container')
      expect(headingContainer).toHaveClass(
        "absolute text-center text-purple-dark text-4xl xl:text-23 sm:text-5xl lg:text-63 font-bold font-['Helvetica'] leading-15"
      )
    })

    it('should style the description text correctly', () => {
      const description = screen.getByTestId('description-container')
      expect(description).toHaveClass(
        "max-w-500 sm:max-w-824 lg:max-w-1236 xl:max-w-1536 text-purple-medium text-sm lg:text-28 sm:text-lg font-normal font-['Helvetica']"
      )
    })
  })

  describe('Responsive Design', () => {
    it('should have responsive classes for different screen sizes', () => {
      const mainContainer = screen.getByTestId('content-section')
      expect(mainContainer).toHaveClass('lg:h-206 lg:gap-10')

      const description = screen.getByTestId('description-container')
      expect(description).toHaveClass(
        'sm:max-w-824 lg:max-w-1236 xl:max-w-1536 sm:text-lg lg:text-28'
      )
    })

    it('should have responsive heading text sizes', () => {
      const headingContainer = screen.getByTestId('heading-container')
      expect(headingContainer).toHaveClass(
        'text-4xl sm:text-5xl lg:text-63 xl:text-23'
      )
    })
  })
})
