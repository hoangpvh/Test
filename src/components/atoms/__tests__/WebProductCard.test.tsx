import { render, screen } from '@testing-library/react'

import WebProductCard from '@/components/atoms/WebProductCard'

describe('WebProductCard', () => {
  it('renders the component correctly', () => {
    render(<WebProductCard />)

    // Test header text
    expect(screen.getByText('DATA POINTS')).toBeInTheDocument()

    // Test all data points are rendered
    const dataPoints = [
      'Open to work',
      'Employee summary',
      'Time in current role',
      'Time at current company',
      'Work history',
    ]

    dataPoints.forEach((point) => {
      expect(screen.getByText(point)).toBeInTheDocument()
    })
  })

  it('applies correct styling classes', () => {
    render(<WebProductCard />)

    // Test main container
    const mainContainer = screen.getByTestId('web-product-card')
    expect(mainContainer).toHaveClass(
      'w-176.50',
      'sm:w-212',
      'h-52',
      'bg-white',
      'rounded-2xl',
      'shadow'
    )

    // Test gradient elements
    const gradientContainer = screen.getByTestId('gradient-background')
    expect(gradientContainer).toBeInTheDocument()
    expect(gradientContainer.children).toHaveLength(2)
  })
})
