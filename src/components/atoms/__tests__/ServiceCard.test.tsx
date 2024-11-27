import { render, screen } from '@testing-library/react'

import ServiceCard from '@/components/atoms/ServiceCard'

describe('ServiceCard', () => {
  const defaultProps = {
    gradientFrom: '#123456',
    gradientTo: '#789ABC',
    borderColor: '#FFFFFF',
    children: 'Test Content',
  }

  it('renders children content correctly', () => {
    render(<ServiceCard {...defaultProps} />)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const { container } = render(<ServiceCard {...defaultProps} />)
    const card = container.firstChild as HTMLElement

    expect(card).toHaveClass(
      'h-37 sm:h-77 xl:h-28 sm:text-8 text-lg xl:text-10 xl:leading-72 lg:px-10 lg:py-5 px-4 py-2 justify-center items-center gap-2.5 flex'
    )
  })

  it('applies correct gradient and border styles', () => {
    const { container } = render(<ServiceCard {...defaultProps} />)
    const card = container.firstChild as HTMLElement

    expect(card).toHaveStyle({
      background: `linear-gradient(to right, ${defaultProps.gradientFrom}, ${defaultProps.gradientTo})`,
      borderLeft: `4px solid ${defaultProps.borderColor}`,
    })
  })

  it('renders with different children content', () => {
    const newProps = {
      ...defaultProps,
      children: <span>Different Content</span>,
    }
    render(<ServiceCard {...newProps} />)
    expect(screen.getByText('Different Content')).toBeInTheDocument()
  })

  it('renders with different gradient colors', () => {
    const newProps = {
      ...defaultProps,
      gradientFrom: '#000000',
      gradientTo: '#FFFFFF',
    }
    const { container } = render(<ServiceCard {...newProps} />)
    const card = container.firstChild as HTMLElement

    expect(card).toHaveStyle({
      background: 'linear-gradient(to right, #000000, #FFFFFF)',
    })
  })
})
