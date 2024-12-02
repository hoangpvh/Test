import { render, screen } from '@testing-library/react'

import OtherProducts from '@/components/molecules/products/OtherProducts'

// Mock the useResponsiveImage hook
jest.mock('@/hooks/useResponsiveImage', () => ({
  useResponsiveImage: () => '/products/OtherProducts.png',
}))

describe('OtherProducts', () => {
  beforeEach(() => {
    render(<OtherProducts />)
  })

  it('renders the heading correctly', () => {
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Many other products')
  })

  it('renders the description text correctly', () => {
    const description = screen.getByText(
      /From mobile apps to web platforms and enterprise software/
    )
    expect(description).toBeInTheDocument()
  })

  it('renders the image with correct attributes', () => {
    const image = screen.getByAltText('Other Products')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/products/OtherProducts.png')
  })
})
