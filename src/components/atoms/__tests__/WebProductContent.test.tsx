import { render, screen } from '@testing-library/react'

import WebProductContent from '@/components/atoms/WebProductContent'

describe('WebProductContent', () => {
  it('renders search bar correctly', () => {
    render(<WebProductContent />)

    expect(screen.getByText('Search...')).toBeInTheDocument()
    // Verify search icon is present
    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
  })

  it('renders filter tags correctly', () => {
    render(<WebProductContent />)

    const expectedTags = ['People', 'CEO', 'Canada']
    expectedTags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  })

  it('renders user list correctly', () => {
    render(<WebProductContent />)

    // Test user names
    const expectedUsers = [
      'Veronica Klent',
      'Laurie Anthony',
      'Mehba Nion',
      'Farina keon',
    ]
    expectedUsers.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })

    // Test roles and locations
    expect(screen.getAllByText('CEO, Cosiz Management')).toHaveLength(3)
    expect(screen.getByText('CEO, Purple Dog Design')).toBeInTheDocument()
    expect(screen.getByText('Quebec, QC')).toBeInTheDocument()
    expect(screen.getAllByText('British columbia, BC')).toHaveLength(3)
  })

  it('renders user images with correct attributes', () => {
    render(<WebProductContent />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)

    // Test first user image
    expect(images[0]).toHaveAttribute('src', '/User 1.svg')
    expect(images[0]).toHaveAttribute('alt', 'Veronica Klent')
  })

  it('applies correct gradient classes to user avatars', () => {
    render(<WebProductContent />)

    const expectedGradients = [
      'from-[#e9f2fd] via-[#ebfbfa] to-[#ebfcf9]',
      'from-[#f4f3f5] to-[#fdf2ec]',
      'from-[#eef3fe] via-[#f3ebfb] to-[#fdefed]',
      'from-white via-[#f9ffec] to-white',
    ]

    // Get all avatar containers
    const avatars = screen.getAllByTestId('user-avatar')
    expect(avatars).toHaveLength(expectedGradients.length)

    // Verify each avatar has the correct gradient class
    avatars.forEach((avatar, index) => {
      expect(avatar).toHaveClass(`bg-gradient-to-b ${expectedGradients[index]}`)
    })
  })
})
