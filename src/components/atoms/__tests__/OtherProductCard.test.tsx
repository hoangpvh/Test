import { render, screen } from '@testing-library/react'

import OtherProductCard from '@/components/atoms/OtherProductCard'

describe('OtherProductCard', () => {
  beforeEach(() => {
    render(<OtherProductCard />)
  })

  it('renders profile header correctly', () => {
    // Profile image
    const profileImage = screen.getByRole('img', { name: 'Profile avatar' })
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute('src', '/User 5.svg')

    // Profile details
    expect(screen.getByText('Dharmesh Shah')).toBeInTheDocument()
    expect(screen.getByText('Product manager')).toBeInTheDocument()
  })

  it('renders company and job title section', () => {
    // Company section
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('HubSpot')).toBeInTheDocument()

    // Job Title section
    expect(screen.getByText('Job Title')).toBeInTheDocument()
    expect(screen.getByText('CTO')).toBeInTheDocument()
  })

  it('renders location and company type section', () => {
    // Location section
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Cambridge')).toBeInTheDocument()

    // Company Type section
    expect(screen.getByText('Company Type')).toBeInTheDocument()
    expect(screen.getByText('Public')).toBeInTheDocument()
  })

  it('renders seniority and industry section', () => {
    // Seniority section
    expect(screen.getByText('Seniority')).toBeInTheDocument()
    expect(screen.getByText('Executive')).toBeInTheDocument()

    // Industry section
    expect(screen.getByText('Industry')).toBeInTheDocument()
    expect(screen.getByText('Internet Software')).toBeInTheDocument()
  })

  it('renders map image correctly', () => {
    const mapImage = screen.getByRole('img', { name: 'Location map' })
    expect(mapImage).toBeInTheDocument()
    expect(mapImage).toHaveAttribute('src', '/Map.svg')
  })

  it('applies correct styling classes', () => {
    // Main container
    const mainContainer = screen.getByTestId('other-product-card')
    expect(mainContainer).toHaveClass(
      'sm:mt-2',
      'ml-129',
      'sm:ml-177',
      'sm:w-250',
      'xl:w-292',
      'w-214',
      'h-350',
      'sm:h-355',
      'xl:h-420',
      'bg-white',
      'z-10',
      'rounded-2xl',
      'flex',
      'flex-col'
    )

    // Profile gradient
    const profileGradient = screen.getByTestId('profile-gradient')
    expect(profileGradient).toHaveClass(
      'absolute',
      'inset-0',
      'bg-gradient-to-b',
      'from-gradient-start2',
      'to-gradient-end2',
      'rounded-full'
    )
  })
})
