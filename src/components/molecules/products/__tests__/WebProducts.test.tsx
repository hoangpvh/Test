import { render, screen } from '@testing-library/react'

import WebProducts from '@/components/molecules/products/WebProducts'

// Mock the child components
jest.mock('@/components/atoms/WebProductCard', () => {
  return function MockWebProductCard() {
    return <div data-testid="web-product-card">WebProductCard</div>
  }
})

jest.mock('@/components/atoms/WebProductContent', () => {
  return function MockWebProductContent() {
    return <div data-testid="web-product-content">WebProductContent</div>
  }
})

describe('WebProducts', () => {
  it('renders the component correctly', () => {
    render(<WebProducts />)

    // Check if heading is rendered
    expect(
      screen.getByRole('heading', {
        name: /our website products/i,
      })
    ).toBeInTheDocument()

    // Check if description text is rendered
    expect(
      screen.getByText(/we create websites that are secure/i)
    ).toBeInTheDocument()

    // Check if child components are rendered
    expect(screen.getByTestId('web-product-card')).toBeInTheDocument()
    expect(screen.getByTestId('web-product-content')).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    const { container } = render(<WebProducts />)

    // Check main container classes
    const mainContainer = container.firstChild as HTMLElement
    expect(mainContainer).toHaveClass(
      'h-auto',
      'w-full',
      'xl:w-1200',
      'justify-center',
      'xl:justify-between',
      'items-center',
      'gap-10',
      'flex',
      'flex-col-reverse',
      'sm:flex-row'
    )

    // Check heading styles
    const heading = screen.getByRole('heading')
    expect(heading).toHaveClass(
      'text-purple-darkest2',
      'sm:text-5xl',
      'text-4xl',
      'font-bold',
      'font-helvetica'
    )

    // Check paragraph styles
    const paragraph = screen.getByText(/we create websites/i)
    expect(paragraph).toHaveClass(
      'text-purple-darkest2Light',
      'text-sm',
      'sm:text-lg',
      'font-normal',
      'font-helvetica',
      'leading-tight',
      'sm:leading-25.20'
    )
  })
})
