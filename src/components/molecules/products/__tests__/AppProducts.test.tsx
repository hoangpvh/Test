import { render, screen } from '@testing-library/react'

import AppProducts from '@/components/molecules/products/AppProducts'

describe('AppProducts', () => {
  it('renders the component correctly', () => {
    render(<AppProducts />)

    expect(
      screen.getByRole('heading', {
        name: /our mobile app products/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/our mobile app solutions combine sleek design/i)
    ).toBeInTheDocument()

    const image = screen.getByAltText('App Products')
    expect(image).toBeInTheDocument()

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
