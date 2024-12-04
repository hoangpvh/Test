import { render, screen } from '@testing-library/react'

import ProductSection from '@/components/organisms/products/ProductSection'

// Mock the child components
jest.mock('@/components/molecules/products/AppProducts', () => {
  return function MockAppProducts() {
    return <div data-testid="app-products">AppProducts</div>
  }
})

jest.mock('@/components/molecules/products/WebProducts', () => {
  return function MockWebProducts() {
    return <div data-testid="web-products">WebProducts</div>
  }
})

jest.mock('@/components/molecules/products/OtherProducts', () => {
  return function MockOtherProducts() {
    return <div data-testid="other-products">OtherProducts</div>
  }
})

describe('Products', () => {
  it('renders all product sections', () => {
    render(<ProductSection />)

    // Check if all child components are rendered
    expect(screen.getByTestId('app-products')).toBeInTheDocument()
    expect(screen.getByTestId('web-products')).toBeInTheDocument()
    expect(screen.getByTestId('other-products')).toBeInTheDocument()
  })

  it('has correct container styling', () => {
    const { container } = render(<ProductSection />)

    const mainContainer = container.firstChild as HTMLElement
    expect(mainContainer).toHaveClass(
      'w-full h-auto px-4 sm:px-10 lg:px-15 xl:px-30 py-20 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end flex flex-col justify-start items-center gap-20'
    )
  })

  it('renders child components in correct order', () => {
    render(<ProductSection />)

    const children = screen.getAllByTestId(/.*-products/)
    expect(children).toHaveLength(3)
    expect(children[0]).toHaveAttribute('data-testid', 'app-products')
    expect(children[1]).toHaveAttribute('data-testid', 'web-products')
    expect(children[2]).toHaveAttribute('data-testid', 'other-products')
  })
})
