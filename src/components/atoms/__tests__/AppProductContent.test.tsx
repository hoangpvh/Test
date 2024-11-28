import { render, screen } from '@testing-library/react'

import { userProfiles } from '@/assets/data'
import AppProductContent from '@/components/atoms/AppProductContent'

describe('AppProductContent', () => {
  it('renders the leads section correctly', () => {
    render(<AppProductContent />)

    const leadsTitle = screen.getByText('Leads')
    expect(leadsTitle).toBeInTheDocument()

    const leadsCount = screen.getByText('3,446')
    expect(leadsCount).toBeInTheDocument()
    expect(leadsCount).toHaveClass('text-purple-medium2', 'text-xs')
  })

  it('renders the filters section with all elements', () => {
    render(<AppProductContent />)

    // Check filter header
    expect(screen.getByText('Filters')).toBeInTheDocument()

    // Check clear button
    const clearButtonContainer = screen.getByText('Clear').closest('div')
    expect(clearButtonContainer).toBeInTheDocument()
    expect(clearButtonContainer).toHaveClass(
      'text-neutral-text2',
      'text-2.5',
      'font-normal',
      'font-inter',
      'underline',
      'leading-14',
      'flex',
      'flex-row'
    )

    // Check apply button
    const applyButtonContainer = screen.getByText('Apply').closest('div')
    expect(applyButtonContainer).toBeInTheDocument()
    expect(applyButtonContainer).toHaveClass(
      'text-neutral-text2',
      'text-2.5',
      'font-normal',
      'font-inter',
      'leading-14',
      'bg-Product-overlay',
      'rounded-lg',
      'px-3.75',
      'py-1.5',
      'flex',
      'flex-row'
    )
  })

  it('renders filter criteria correctly', () => {
    render(<AppProductContent />)

    expect(screen.getByText('Leads within')).toBeInTheDocument()
    expect(screen.getByText('Current job title in')).toBeInTheDocument()
    expect(screen.getByText('CEO +1')).toHaveClass('text-lime-500')
    expect(screen.getByText('Company name')).toBeInTheDocument()
  })

  it('renders all user profiles from data', () => {
    render(<AppProductContent />)

    // Check if all profiles are rendered
    userProfiles.forEach((profile, index) => {
      expect(screen.getByText(profile.name)).toBeInTheDocument()

      // Check profile images
      const profileImages = screen.getAllByAltText('profile')
      expect(profileImages[index]).toHaveAttribute('src', profile.profileImage)

      // Check check icons
      const checkIcons = screen.getAllByAltText('check')
      expect(checkIcons[index]).toHaveAttribute('src', '/Check.svg')
    })
  })

  it('applies custom className when provided', () => {
    const customClass = 'custom-class'
    render(<AppProductContent className={customClass} />)

    const container = screen.getByTestId('product-content')
    expect(container).toHaveClass(customClass)
  })

  it('renders with correct responsive classes', () => {
    render(<AppProductContent />)

    const container = screen.getByTestId('product-content')
    expect(container).toHaveClass('w-342', 'sm:w-364')
    expect(container).toHaveClass('sm:px-21')
  })

  it('renders icons correctly', () => {
    render(<AppProductContent />)

    // Check building icon presence
    const buildingIcon = screen.getByTestId('building-icon')
    expect(buildingIcon).toBeInTheDocument()
    expect(buildingIcon).toHaveAttribute('color', 'text-secondary')

    // Check close icon presence
    const closeIcon = screen.getByTestId('close-icon')
    expect(closeIcon).toBeInTheDocument()
    expect(closeIcon).toHaveAttribute('color', 'neutral-text2')

    // Check add icon presence
    const addIcon = screen.getByTestId('add-icon')
    expect(addIcon).toBeInTheDocument()
    expect(addIcon).toHaveAttribute('color', 'neutral-text2')
  })

  it('renders divider line', () => {
    render(<AppProductContent />)

    const divider = screen.getByTestId('filter-divider')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('border-Product-divider')
  })
})
