import { render, screen } from '@testing-library/react'

import ServiceRow from '@/components/molecules/servicess/ServiceRow'

describe('ServiceRow', () => {
  const defaultProps = {
    label: 'Test Service',
    gradientFrom: '#123456',
    gradientTo: '#789ABC',
    borderColor: '#FFFFFF',
  }

  it('renders with provided props', () => {
    render(<ServiceRow {...defaultProps} />)
    expect(screen.getByText('Test Service')).toBeInTheDocument()
  })

  it('applies correct styling classes to label', () => {
    render(<ServiceRow {...defaultProps} />)
    const labelElement = screen.getByText('Test Service')
    expect(labelElement).toHaveClass(
      'text-center text-black font-bold font-helvetica whitespace-nowrap'
    )
  })

  it('passes correct props to ServiceCard', () => {
    const { container } = render(<ServiceRow {...defaultProps} />)
    const serviceCard = container.firstChild

    expect(serviceCard).toHaveStyle({
      background: `linear-gradient(to right, ${defaultProps.gradientFrom}, ${defaultProps.gradientTo})`,
      borderLeft: `4px solid ${defaultProps.borderColor}`,
    })
  })

  it('renders with different label text', () => {
    const newProps = {
      ...defaultProps,
      label: 'Different Service',
    }
    render(<ServiceRow {...newProps} />)
    expect(screen.getByText('Different Service')).toBeInTheDocument()
  })

  it('renders with different gradient colors', () => {
    const newProps = {
      ...defaultProps,
      gradientFrom: '#000000',
      gradientTo: '#FFFFFF',
    }
    const { container } = render(<ServiceRow {...newProps} />)
    const serviceCard = container.firstChild

    expect(serviceCard).toHaveStyle({
      background: 'linear-gradient(to right, #000000, #FFFFFF)',
    })
  })
})
