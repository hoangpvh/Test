import { render, screen } from '@testing-library/react'
import React from 'react'

import Header from '@/components/organisms/header/Header'

// Mock child components
jest.mock('@/components/molecules/logo/Logo', () => {
  return function MockLogo() {
    return <div data-testid="mock-logo">Logo</div>
  }
})

jest.mock('@/components/molecules/menu/MenuItems', () => {
  return function MockMenuItems() {
    return <div data-testid="mock-menu-items">Menu Items</div>
  }
})

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />)
  })

  describe('Layout Structure', () => {
    it('should render with correct container styles', () => {
      const container = screen.getByRole('banner')
      expect(container).toHaveClass(
        'w-full h-25 sm:h-70 lg:h-22 bg-neutral-background sm:bg-white flex flex-col items-center sm:mt-10'
      )
    })

    it('should render the decorative circle', () => {
      const circle = screen.getByTestId('decorative-circle')
      expect(circle).toHaveClass(
        'absolute w-75 h-75 sm:hidden -mt-30 bg-primary-default/20 rounded-full blur-banner z-10'
      )
    })

    it('should render the navigation bar with correct styles', () => {
      const nav = screen.getByRole('navigation')
      expect(nav).toHaveClass(
        'fixed left-1/2 -translate-x-1/2 w-full sm:max-w-[calc(100%-160px)] lg:w-1200 pb-4 pt-10 px-6 sm:px-5 h-25 sm:h-70 lg:h-22 sm:py-5 bg-neutral-background sm:bg-primary-default rounded-bl-2xl rounded-br-2xl sm:rounded-full border-b sm:border-none flex justify-between items-center z-50'
      )
    })
  })

  describe('Component Rendering', () => {
    it('should render the Logo component', () => {
      const logo = screen.getByTestId('mock-logo')
      expect(logo).toBeInTheDocument()
    })

    it('should render the MenuItems component', () => {
      const menuItems = screen.getByTestId('mock-menu-items')
      expect(menuItems).toBeInTheDocument()
    })
  })
})
