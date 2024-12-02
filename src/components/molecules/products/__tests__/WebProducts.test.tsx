import { render, screen } from '@testing-library/react'

import WebProducts from '@/components/molecules/products/WebProducts'

// Mock the useResponsiveImage hook
jest.mock('@/hooks/useResponsiveImage', () => ({
  useResponsiveImage: () => '/products/WebProducts.png',
}))

describe('WebProducts', () => {
  beforeEach(() => {
    render(<WebProducts />)
  })

  it('renders the heading correctly', () => {
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Our Website Products')
  })

  it('renders the description text correctly', () => {
    const description = screen.getByText(/We create websites that are secure/)
    expect(description).toBeInTheDocument()
  })

  it('renders the image with correct attributes', () => {
    const image = screen.getByAltText('Web Products')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/products/WebProducts.png')
  })
})
