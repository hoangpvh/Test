import { render, screen } from '@testing-library/react'

import HomeTemplate from '@/components/templates/HomeTemplate'

jest.mock('@/components/organisms/banner/Banner', () => {
  return function MockBanner() {
    return <div data-testid="mock-banner">Banner Component</div>
  }
})

jest.mock('@/components/organisms/solutions/Solution', () => {
  return function MockSolutions() {
    return <div data-testid="mock-solutions">Solutions Component</div>
  }
})

jest.mock('@/components/organisms/servicess/ServicesSection', () => {
  return function MockServicesSection() {
    return <div data-testid="mock-services">Services Component</div>
  }
})

jest.mock('@/components/organisms/products/Products', () => {
  return function MockProducts() {
    return <div data-testid="mock-products">Products Component</div>
  }
})

describe('HomeTemplate', () => {
  it('renders all required components', () => {
    render(<HomeTemplate />)

    expect(screen.getByTestId('mock-banner')).toBeInTheDocument()
    expect(screen.getByTestId('mock-solutions')).toBeInTheDocument()
    expect(screen.getByTestId('mock-services')).toBeInTheDocument()
    expect(screen.getByTestId('mock-products')).toBeInTheDocument()
  })

  it('has correct layout structure', () => {
    render(<HomeTemplate />)

    const container = screen.getByTestId('home-template')
    expect(container).toHaveClass(
      'w-full flex flex-col items-center justify-start overflow-hidden'
    )
  })
})
