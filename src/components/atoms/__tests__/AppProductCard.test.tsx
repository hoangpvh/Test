import { render, screen } from '@testing-library/react'

import AppProductCard from '@/components/atoms/AppProductCard'

describe('AppProductCard', () => {
  it('renders all form fields correctly', () => {
    render(<AppProductCard />)

    // Check labels
    expect(screen.getByText('First Name')).toBeInTheDocument()
    expect(screen.getByText('Last Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Industry')).toBeInTheDocument()
    expect(screen.getByText('Designation')).toBeInTheDocument()

    // Check values
    expect(screen.getByText('Darrel')).toBeInTheDocument()
    expect(screen.getByText('Stewar')).toBeInTheDocument()
    expect(screen.getByText('darrelstewar@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('IT Service')).toBeInTheDocument()
    expect(screen.getAllByText('VP Sales')).toHaveLength(2)
  })

  it('renders the save prospect button', () => {
    render(<AppProductCard />)

    const saveButton = screen.getByRole('button', { name: /save prospect/i })
    expect(saveButton).toBeInTheDocument()
    expect(saveButton).toHaveClass('bg-lime-500')
  })

  it('renders the avatar section correctly', () => {
    render(<AppProductCard />)

    const avatar = screen.getByAltText('Avatar')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('src', '/Avatar 5.svg')

    expect(screen.getByText('Chris Wall')).toBeInTheDocument()
    expect(screen.getAllByText('VP Sales')[1]).toBeInTheDocument() // Second occurrence in avatar section
  })

  it('applies custom className when provided', () => {
    const customClass = 'custom-class'
    render(<AppProductCard className={customClass} />)

    const container = screen
      .getByText('Darrel')
      .closest('div[class*="bg-white rounded-2xl"]')
    expect(container).toHaveClass(customClass)
  })

  it('has hidden copy icon by default', () => {
    render(<AppProductCard />)

    const copyIcon = screen.getByRole('img', { name: /copy/i })
    expect(copyIcon).toHaveClass('hidden')
  })

  it('renders responsive layout correctly', () => {
    render(<AppProductCard />)

    // Check if Last Name section is hidden on mobile
    const lastNameSection = screen.getByText('Last Name').parentElement
    expect(lastNameSection).toHaveClass('hidden', 'sm:flex')

    // Check if Industry/Designation row is hidden on mobile
    const industrySection = screen
      .getByText('Industry')
      .closest('div[class*="sm:flex"]')
    expect(industrySection).toHaveClass('hidden', 'sm:flex')
  })
})
