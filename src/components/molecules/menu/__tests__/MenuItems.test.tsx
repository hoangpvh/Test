import { fireEvent, render, screen } from '@testing-library/react'

import { menuItems } from '@/assets/data'
import MenuItems from '@/components/molecules/menu/MenuItems'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('MenuItems', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn()

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

    expect(screen.getByTestId('menu-button')).toBeInTheDocument()

    menuItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })

  it('toggles the mobile menu on button click', () => {
    render(<MenuItems />)

    const menuButton = screen.getByTestId('menu-button')

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

    fireEvent.click(menuButton)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()

    fireEvent.click(menuButton)
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })

  it('updates the active section on menu item click', () => {
    render(<MenuItems />)

    const firstMenuItem = screen.getByText(menuItems[0].label)

    fireEvent.click(firstMenuItem)

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

    const nonHomeLink = screen.getByText(menuItems[1].label)
    fireEvent.click(nonHomeLink)

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    })
  })

  it('closes mobile menu when clicking outside', () => {
    render(<MenuItems />)

    const menuButton = screen.getByTestId('menu-button')
    fireEvent.click(menuButton)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()

    fireEvent.mouseDown(document.body)

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })
})
