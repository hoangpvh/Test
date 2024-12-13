import { render, screen } from '@testing-library/react'

import OtherProducts from '@/components/molecules/products/OtherProducts'

describe('OtherProducts', () => {
  it('renders the component correctly', () => {
    render(<OtherProducts />)

    // Check heading
    expect(
      screen.getByRole('heading', {
        name: /many other products/i,
      })
    ).toBeInTheDocument()

    // Check paragraph content
    expect(
      screen.getByText(/from mobile apps to web platforms/i)
    ).toBeInTheDocument()

    // Check image
    const image = screen.getByAltText('Other Products')
    expect(image).toBeInTheDocument()

    // Check picture sources
    const sources = document.getElementsByTagName('source')
    expect(sources[0]).toHaveAttribute(
      'srcSet',
      '/images/products/OtherProducts.webp'
    )
    expect(sources[1]).toHaveAttribute(
      'srcSet',
      '/images/products/OtherProductsTablet.webp'
    )
  })
})
