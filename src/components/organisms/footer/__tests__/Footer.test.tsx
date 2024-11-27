import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import Footer from '@/components/organisms/footer/Footer'

describe('Footer', () => {
  it('renders logo and company name', () => {
    render(<Footer />)
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(screen.getByText('Funcoding')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    const contactInfo = screen.getByText((content, element) => {
      const hasEmail = content.includes('funcoding@gmail.com')
      const hasPhone = content.includes('(+00) 001123344546')
      return hasEmail || hasPhone
    })
    expect(contactInfo).toBeInTheDocument()
    expect(screen.getByText('Tokyo - Japan')).toBeInTheDocument()
  })

  it('renders navigation sections', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()

    const links = [
      'About us',
      'Solutions',
      'Blog',
      'Career Center',
      'FAQ',
      'Eployeers',
    ]
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders contact form section', () => {
    render(<Footer />)
    expect(
      screen.getByText('What solution do you need us to provide?')
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter the content you want to send!')
    ).toBeInTheDocument()
    expect(screen.getByText('Available to respond')).toBeInTheDocument()
    expect(screen.getByText('Send Email')).toBeInTheDocument()
  })

  it('handles message input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const textarea = screen.getByPlaceholderText(
      'Enter the content you want to send!'
    )
    await user.type(textarea, 'Test message')
    expect(textarea).toHaveValue('Test message')
  })
})
