import { render, screen } from '@testing-library/react'

import Header from '@/components/organisms/header/Header'

// Mock child components
jest.mock('@/components/molecules/logo/Logo', () => {
  return function MockLogo() {
    return <div data-testid="mock-logo">Logo Component</div>
  }
})

jest.mock('@/components/molecules/menu/MenuItems', () => {
  return function MockMenuItems() {
    return <div data-testid="mock-menu-items">Menu Items Component</div>
  }
})

describe('Header', () => {
  it('renders the component correctly', () => {
    render(<Header />)

    // Check if the header banner exists
    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()

    // Check if the decorative circle exists
    const decorativeCircle = screen.getByTestId('decorative-circle')
    expect(decorativeCircle).toBeInTheDocument()

    // Check if navigation exists
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()

    // Check if Logo component is rendered
    expect(screen.getByTestId('mock-logo')).toBeInTheDocument()

    // Check if MenuItems component is rendered
    expect(screen.getByTestId('mock-menu-items')).toBeInTheDocument()
  })

  it('applies correct classes to banner', () => {
    render(<Header />)

    const banner = screen.getByRole('banner')
    expect(banner).toHaveClass(
      'w-full h-25 sm:h-70 lg:h-22 bg-neutral-background sm:bg-white flex flex-col items-center sm:mt-10'
    )
  })

  it('applies correct classes to navigation', () => {
    render(<Header />)

    const navigation = screen.getByRole('navigation')
    expect(navigation).toHaveClass(
      'fixed w-full sm:w-[calc(100%-2rem)] lg:max-w-1200 pb-4 pt-10 px-6 sm:p-5 h-25 sm:h-22 lg:px-10 bg-neutral-background sm:bg-primary-default rounded-bl-2xl rounded-br-2xl sm:rounded-full border-b sm:border-none flex justify-between items-center z-50'
    )
  })

  it('applies correct classes to decorative circle', () => {
    render(<Header />)

    const decorativeCircle = screen.getByTestId('decorative-circle')
    expect(decorativeCircle).toHaveClass(
      'absolute w-75 h-75 sm:hidden -mt-30 bg-primary-default/20 rounded-full blur-banner z-10'
    )
  })
})
