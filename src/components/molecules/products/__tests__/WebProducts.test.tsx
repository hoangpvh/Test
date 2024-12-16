import { render, screen } from '@testing-library/react'

import WebProducts from '@/components/molecules/products/WebProducts'

describe('WebProducts', () => {
  it('renders the component correctly', () => {
    render(<WebProducts />)

    // Check heading
    expect(
      screen.getByRole('heading', {
        name: /our website products/i,
      })
    ).toBeInTheDocument()

    // Check paragraph content
    expect(
      screen.getByText(/we create websites that are secure/i)
    ).toBeInTheDocument()

    // Check image
    const image = screen.getByAltText('Web Products')
    expect(image).toBeInTheDocument()

    // Check picture sources
    const sources = document.getElementsByTagName('source')
    expect(sources[0]).toHaveAttribute(
      'srcSet',
      '/images/products/WebProducts.webp'
    )
    expect(sources[1]).toHaveAttribute(
      'srcSet',
      '/images/products/WebProductsTablet.webp'
    )
  })
})
