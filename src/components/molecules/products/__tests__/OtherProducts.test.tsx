import { render, screen } from '@testing-library/react'

import OtherProducts from '@/components/molecules/products/OtherProducts'

jest.mock('@/components/atoms/OtherProductCard', () => {
  return function MockOtherProductCard() {
    return <div data-testid="other-product-card">OtherProductCard</div>
  }
})

jest.mock('@/components/atoms/OtherProductContent', () => {
  return function MockOtherProductContent() {
    return <div data-testid="other-product-content">OtherProductContent</div>
  }
})

describe('OtherProducts', () => {
  beforeEach(() => {
    render(<OtherProducts />)
  })

  it('renders main container with correct styling', () => {
    const container = screen.getByTestId('other-products-container')
    expect(container).toHaveClass(
      'w-full xl:w-1200 gap-10 h-auto flex justify-center sm:flex-row flex-col xl:justify-between items-center'
    )
  })

  it('renders text container with correct styling', () => {
    const textContainer = screen.getByTestId('text-container')
    expect(textContainer).toHaveClass(
      'flex flex-col gap-6 xl:max-w-600 sm:max-w-332 lg:max-w-464 max-w-520'
    )
  })

  it('renders heading with correct text and styling', () => {
    const heading = screen.getByTestId('heading')
    expect(heading).toHaveTextContent('Many other products')
    expect(heading).toHaveClass(
      'text-purple-darkest2 text-4xl sm:text-5xl font-bold font-helvetica'
    )
  })

  it('renders description with correct text and styling', () => {
    const description = screen.getByTestId('description')
    expect(description).toHaveTextContent(
      /From mobile apps to web platforms and enterprise software/
    )
    expect(description).toHaveClass(
      'text-purple-darkest2Light text-sm sm:text-lg font-normal font-helvetica leading-25.20'
    )
  })

  it('renders image container with correct styling', () => {
    const imageContainer = screen.getByTestId('image-container')
    expect(imageContainer).toHaveClass(
      'relative sm:w-469 sm:h-355 xl:h-420 w-343 h-350 flex'
    )
  })

  it('renders child components', () => {
    expect(screen.getByTestId('other-product-content')).toBeInTheDocument()
    expect(screen.getByTestId('other-product-card')).toBeInTheDocument()
  })
})
