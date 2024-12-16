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

jest.mock('@/components/molecules/email/EmailInputGroup', () => {
  return function MockEmailInputGroup() {
    return <div data-testid="mock-email-input-group">Email Input Group</div>
  }
})

describe('Banner', () => {
  it('renders the component correctly', () => {
    render(<Banner />)

    // Check if the banner container exists
    const bannerContainer = screen.getByTestId('banner-container')
    expect(bannerContainer).toBeInTheDocument()

    // Check if ContentSection is rendered
    expect(screen.getByTestId('mock-content-section')).toBeInTheDocument()

    // Check if all TechRows are rendered
    const techRows = screen.getAllByTestId('mock-tech-row')
    expect(techRows).toHaveLength(techList.length)

    // Check if EmailInputGroup is rendered
    expect(screen.getByTestId('mock-email-input-group')).toBeInTheDocument()
  })

  it('applies correct classes to the banner container', () => {
    render(<Banner />)

    const bannerContainer = screen.getByTestId('banner-container')
    expect(bannerContainer).toHaveClass(
      'w-full',
      'h-auto',
      'flex',
      'flex-col',
      'items-center',
      '-z-100'
    )
  })

  it('renders tech rows with correct classes', () => {
    render(<Banner />)

    const techRows = screen.getAllByTestId('mock-tech-row')

    techList.forEach((tech, index) => {
      expect(techRows[index]).toHaveClass(tech.className)
    })
  })
})
