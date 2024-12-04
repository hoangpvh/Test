import { fireEvent, render, screen } from '@testing-library/react'

import { menuItems } from '@/assets/data'
import MenuItems from '@/components/molecules/menu/MenuItems'

// Mock usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('MenuItems', () => {
  // Mock window.scrollTo before each test
  beforeEach(() => {
    window.scrollTo = jest.fn()
    // Mock getElementById with proper HTMLElement structure
    document.getElementById = jest.fn((id) => {
      const element = document.createElement('div')
      element.getBoundingClientRect = () => ({
        top: 100,
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      })
      return element
    })
  })

  it('renders the component correctly', () => {
    render(<MenuItems />)

    // Check if the menu button is present
    expect(screen.getByTestId('menu-button')).toBeInTheDocument()

    // Check if the desktop navigation is present
    menuItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })

  it('toggles the mobile menu on button click', () => {
    render(<MenuItems />)

    const menuButton = screen.getByTestId('menu-button')

    // Initially, the mobile menu should not be visible
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

    // Click the menu button to open the mobile menu
    fireEvent.click(menuButton)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()

    // Click the menu button again to close the mobile menu
    fireEvent.click(menuButton)
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })

  it('updates the active section on menu item click', () => {
    render(<MenuItems />)

    const firstMenuItem = screen.getByText(menuItems[0].label)

    // Click the first menu item
    fireEvent.click(firstMenuItem)

    // Check if the first menu item is now active
    expect(firstMenuItem).toHaveClass('bg-primary-light/20 font-semibold')
  })

  it('handles scroll to top when clicking home link', () => {
    render(<MenuItems />)

    const homeLink = screen.getByText(menuItems[0].label)
    fireEvent.click(homeLink)

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    })
  })

  it('handles scroll to section when clicking non-home links', () => {
    render(<MenuItems />)

    // Find a non-home menu item
    const nonHomeLink = screen.getByText(menuItems[1].label)
    fireEvent.click(nonHomeLink)

    // Check if scrollTo was called with correct offset calculation
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    })
  })

  it('closes mobile menu when clicking outside', () => {
    render(<MenuItems />)

    // Open mobile menu
    const menuButton = screen.getByTestId('menu-button')
    fireEvent.click(menuButton)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()

    // Simulate click outside
    fireEvent.mouseDown(document.body)

    // Menu should be closed
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })
})
