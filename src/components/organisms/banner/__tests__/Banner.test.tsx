import { render, screen } from '@testing-library/react'
import React from 'react'

import { techList } from '@/assets/data'
import Banner from '@/components/organisms/banner/Banner'

// Mock child components
jest.mock('@/components/molecules/banner/ContentSection', () => {
  return function MockContentSection() {
    return <div data-testid="mock-content-section">Content Section</div>
  }
})

jest.mock('@/components/molecules/banner/EmailInputGroup', () => {
  return function MockEmailInputGroup() {
    return <div data-testid="mock-email-input-group">Email Input Group</div>
  }
})

jest.mock('@/components/molecules/banner/TechRow', () => {
  return function MockTechRow({
    className,
    logos,
  }: {
    className: string
    logos: any[]
  }) {
    return (
      <div data-testid="mock-tech-row" className={className}>
        Tech Row: {logos.length} logos
      </div>
    )
  }
})

describe('Banner Component', () => {
  beforeEach(() => {
    render(<Banner />)
  })

  describe('Layout Structure', () => {
    it('should render with correct container styles', () => {
      const container = screen.getByTestId('banner-container')
      expect(container).toHaveClass(
        'w-full h-auto flex flex-col items-center lg:mt-60 mt-20 sm:mt-31 -z-100'
      )
    })

    it('should render ContentSection component', () => {
      const contentSection = screen.getByTestId('mock-content-section')
      expect(contentSection).toBeInTheDocument()
    })

    it('should render EmailInputGroup component', () => {
      const emailInputGroup = screen.getByTestId('mock-email-input-group')
      expect(emailInputGroup).toBeInTheDocument()
    })
  })

  describe('TechRow Rendering', () => {
    it('should render correct number of TechRow components', () => {
      const techRows = screen.getAllByTestId('mock-tech-row')
      expect(techRows).toHaveLength(techList.length)
    })

    it('should pass correct props to TechRow components', () => {
      const techRows = screen.getAllByTestId('mock-tech-row')

      techRows.forEach((row, index) => {
        expect(row).toHaveClass(techList[index].className)
        expect(row).toHaveTextContent(
          `Tech Row: ${techList[index].logos.length} logos`
        )
      })
    })
  })

  describe('Responsive Design', () => {
    it('should have responsive margin classes', () => {
      const container = screen.getByTestId('banner-container')
      expect(container).toHaveClass('mt-20', 'sm:mt-31', 'lg:mt-60')
    })
  })

  describe('Component Integration', () => {
    it('should render all components in correct order', () => {
      const container = screen.getByTestId('banner-container')
      const elements = container.children

      expect(elements[0]).toHaveAttribute('data-testid', 'mock-content-section')
      expect(elements[elements.length - 1]).toHaveAttribute(
        'data-testid',
        'mock-email-input-group'
      )

      // Check tech rows are in between
      for (let i = 1; i < elements.length - 1; i++) {
        expect(elements[i]).toHaveAttribute('data-testid', 'mock-tech-row')
      }
    })
  })
})
