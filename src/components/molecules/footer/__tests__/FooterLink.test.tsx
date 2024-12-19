import { render, screen } from '@testing-library/react'

import FooterLink from '@/components/molecules/footer/FooterLink'

describe('FooterLink', () => {
  const mockProps = {
    title: 'Quick Links',
    links: ['Home', 'About', 'Contact'],
  }

  it('renders the title correctly', () => {
    render(<FooterLink {...mockProps} />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('renders all links correctly', () => {
    render(<FooterLink {...mockProps} />)

    mockProps.links.forEach((link) => {
      const linkElement = screen.getByText(link)
      expect(linkElement).toBeInTheDocument()
      expect(linkElement.tagName).toBe('A')
      expect(linkElement).toHaveAttribute('href', '#')
    })
  })

  it('renders with correct styling classes', () => {
    render(<FooterLink {...mockProps} />)

    const title = screen.getByText('Quick Links')
    expect(title).toHaveClass(
      'text-white',
      'text-lg',
      'font-bold',
      'font-helvetica',
      'leading-normal'
    )

    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveClass(
        'text-text-neutral',
        'text-base',
        'font-normal',
        'sm:font-medium',
        'font-helvetica',
        'sm:leading-loose',
        'leading-7'
      )
    })
  })

  it('renders with empty links array', () => {
    render(<FooterLink title="Empty Section" links={[]} />)
    expect(screen.getByText('Empty Section')).toBeInTheDocument()
    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })
})
