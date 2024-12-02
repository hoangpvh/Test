import { render, screen } from '@testing-library/react'

import AppProducts from '@/components/molecules/products/AppProducts'

// Mock the useResponsiveImage hook
jest.mock('@/hooks/useResponsiveImage', () => ({
  useResponsiveImage: () => '/products/AppProducts.png',
}))

describe('AppProducts', () => {
  beforeEach(() => {
    render(<AppProducts />)
  })

  it('renders the heading correctly', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Our Mobile App Products')
  })

  it('renders the description text correctly', () => {
    const description = screen.getByText(
      /Our mobile app solutions combine sleek design/
    )
    expect(description).toBeInTheDocument()
  })

  it('renders the image with correct attributes', () => {
    const image = screen.getByAltText('App Products')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/products/AppProducts.png')
  })
})
