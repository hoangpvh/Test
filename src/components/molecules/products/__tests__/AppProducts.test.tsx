import { render, screen } from '@testing-library/react'

import AppProducts from '@/components/molecules/products/AppProducts'

describe('AppProducts', () => {
  it('renders the component correctly', () => {
    render(<AppProducts />)

    // Check heading
    expect(
      screen.getByRole('heading', {
        name: /our mobile app products/i,
      })
    ).toBeInTheDocument()

    // Check paragraph content
    expect(
      screen.getByText(/our mobile app solutions combine sleek design/i)
    ).toBeInTheDocument()

    // Check image
    const image = screen.getByAltText('App Products')
    expect(image).toBeInTheDocument()

    // Check picture sources
    const sources = document.getElementsByTagName('source')
    expect(sources[0]).toHaveAttribute(
      'srcSet',
      '/images/products/AppProducts.webp'
    )
    expect(sources[1]).toHaveAttribute(
      'srcSet',
      '/images/products/AppProductsTablet.webp'
    )
  })
})
