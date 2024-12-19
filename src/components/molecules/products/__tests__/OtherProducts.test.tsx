import { render, screen } from '@testing-library/react'

import OtherProducts from '@/components/molecules/products/OtherProducts'

describe('OtherProducts', () => {
  it('renders the component correctly', () => {
    render(<OtherProducts />)

    expect(
      screen.getByRole('heading', {
        name: /many other products/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/from mobile apps to web platforms/i)
    ).toBeInTheDocument()

    const image = screen.getByAltText('Other Products')
    expect(image).toBeInTheDocument()

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
