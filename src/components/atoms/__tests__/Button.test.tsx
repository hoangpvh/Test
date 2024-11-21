import { fireEvent, render, screen } from '@testing-library/react'
import { FaUser } from 'react-icons/fa'

import Button from '@/components/atoms/Button'

describe('Button', () => {
  // Test basic rendering
  it('renders button with title', () => {
    render(<Button title="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  // Test click handler
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button title="Click me" onClick={handleClick} />)

    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // Test left icon rendering
  it('renders with left icon when provided', () => {
    render(
      <Button title="With Icon" leftIcon={<FaUser data-testid="icon" />} />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  // Test custom className
  it('applies custom className', () => {
    render(<Button title="Custom Class" className="custom-class" />)

    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  // Test custom titleClassName
  it('applies custom titleClassName to title', () => {
    render(
      <Button title="Custom Title Class" titleClassName="custom-title-class" />
    )

    expect(screen.getByText('Custom Title Class')).toHaveClass(
      'custom-title-class'
    )
  })

  // Test disabled state
  it('can be disabled', () => {
    render(<Button title="Disabled Button" disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  // Test button type
  it('has type="button" by default', () => {
    render(<Button title="Default Type" />)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  // Test hover state
  it('has hover styles', () => {
    render(<Button title="Hover Test" />)
    expect(screen.getByRole('button')).toHaveClass('hover:bg-primary-hover')
  })

  // Test active state
  it('has active styles', () => {
    render(<Button title="Active Test" />)
    expect(screen.getByRole('button')).toHaveClass('active:bg-primary-active')
  })
})
