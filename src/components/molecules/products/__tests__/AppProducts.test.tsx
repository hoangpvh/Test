import { render, screen } from '@testing-library/react'

import AppProducts from '@/components/molecules/products/AppProducts'

// Mock the child components
jest.mock('@/components/atoms/AppProductCard', () => {
  return function MockAppProductCard({ className }: { className?: string }) {
    return (
      <div data-testid="app-product-card" className={className}>
        AppProductCard
      </div>
    )
  }
})

jest.mock('@/components/atoms/AppProductContent', () => {
  return function MockAppProductContent({ className }: { className?: string }) {
    return (
      <div data-testid="app-product-content" className={className}>
        AppProductContent
      </div>
    )
  }
})

describe('AppProducts', () => {
  beforeEach(() => {
    render(<AppProducts />)
  })

  it('renders the heading correctly', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Our Mobile App Products')
    expect(heading).toHaveClass(
      'text-purple-darkest2 sm:text-5xl text-4xl font-bold font-helvetica'
    )
  })

  it('renders the description text correctly', () => {
    const description = screen.getByText(
      /Our mobile app solutions combine sleek design/
    )
    expect(description).toHaveClass(
      'text-purple-darkest2Light text-sm sm:text-lg font-normal font-helvetica leading-tight sm:leading-25.20'
    )
  })

  it('renders AppProductContent with correct positioning', () => {
    const content = screen.getByTestId('app-product-content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('absolute left-0 top-0')
  })

  it('renders AppProductCard with correct positioning', () => {
    const card = screen.getByTestId('app-product-card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass(
      'absolute right-0 top-113 sm:left-25 lg:left-147 sm:top-53 xl:top-70'
    )
  })

  it('renders main container with correct styling', () => {
    const container = screen.getByTestId('app-products-container')
    expect(container).toHaveClass(
      'h-auto w-full xl:w-1200 sm:h-378 gap-10 flex sm:flex-row flex-col justify-center xl:justify-between items-center'
    )
  })

  it('renders text container with correct styling', () => {
    const textContainer = screen.getByTestId('text-container')
    expect(textContainer).toHaveClass(
      'flex flex-col gap-6 xl:max-w-531 sm:max-w-332 lg:max-w-432 max-w-520'
    )
  })

  it('renders image container with correct styling', () => {
    const imageContainer = screen.getByTestId('image-container')
    expect(imageContainer).toHaveClass(
      'w-342 h-330 sm:w-432 xl:w-532 xl:h-378 relative'
    )
  })
})
