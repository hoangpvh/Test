import { render, screen } from '@testing-library/react'
import { FiAirplay } from 'react-icons/fi'

import SolutionCard from '@/components/molecules/solutions/SolutionCard'

describe('SolutionCard', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description',
    icon: FiAirplay,
  }

  it('renders with default props', () => {
    render(<SolutionCard {...defaultProps} />)

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders with custom icon color', () => {
    const customColor = '#FF0000'
    render(<SolutionCard {...defaultProps} iconColor={customColor} />)

    const icon = screen.getByTestId('icon')
    expect(icon).toHaveStyle({ color: customColor })
  })

  it('renders with default white icon color when not specified', () => {
    render(<SolutionCard {...defaultProps} />)

    const icon = screen.getByTestId('icon')
    expect(icon).toHaveStyle({ color: '#FFFFFF' })
  })

  it('applies correct responsive classes', () => {
    render(<SolutionCard {...defaultProps} />)

    const container = screen.getByTestId('solution-card')
    expect(container).toHaveClass('w-343 sm:w-110 xl:w-90 xl:h-60 sm:h-65 h-52')
  })
})
