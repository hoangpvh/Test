import { fireEvent, render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import React from 'react'

import { menuItems } from '@/assets/data'
import MenuItems from '@/components/molecules/menu/MenuItems'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('MenuItems Component', () => {
  const mockPathname = usePathname as jest.Mock

  beforeEach(() => {
    mockPathname.mockReset()
    mockPathname.mockReturnValue('/')
  })

  describe('Desktop View', () => {
    it('should render all menu items', () => {
      render(<MenuItems />)

      menuItems.forEach((item) => {
        const link = screen.getByText(item.label)
        expect(link).toBeInTheDocument()
        expect(link.closest('a')).toHaveAttribute('href', item.href)
      })
    })

    describe('Active Menu Item States', () => {
      it('should not highlight any item when pathname does not match', () => {
        mockPathname.mockReturnValue('/non-existent')
        render(<MenuItems />)

        menuItems.forEach((item) => {
          const link = screen.getByText(item.label).closest('a')
          expect(link).not.toHaveClass('bg-primary-light/20', 'font-semibold')
        })
      })
    })
  })

  describe('Mobile View', () => {
    it('should render menu button on mobile', () => {
      render(<MenuItems />)
      const menuButton = screen.getByRole('button')
      expect(menuButton).toBeInTheDocument()
    })

    it('should toggle mobile menu visibility', () => {
      render(<MenuItems />)

      // Initially menu should be hidden
      expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

      // Open menu
      const menuButton = screen.getByRole('button')
      fireEvent.click(menuButton)

      // Menu should be visible
      const mobileMenu = screen.getByTestId('mobile-menu')
      expect(mobileMenu).toBeInTheDocument()

      // Close menu
      fireEvent.click(menuButton)
      expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    })

    it('should render menu items in mobile view', () => {
      render(<MenuItems />)

      const menuButton = screen.getByRole('button')
      fireEvent.click(menuButton)

      const mobileMenu = screen.getByTestId('mobile-menu')
      expect(mobileMenu).toHaveClass(
        'lg:hidden flex flex-col items-start absolute top-24 right-4 bg-primary-default p-4 rounded-lg shadow-lg z-50'
      )

      // Verify mobile menu items are rendered
      menuItems.forEach((item) => {
        const link = screen.getAllByText(item.label)[1] // Second instance is in mobile menu
        expect(link).toBeInTheDocument()
      })
    })
  })

  describe('Menu Button', () => {
    it('should render menu icon', () => {
      render(<MenuItems />)

      const menuButton = screen.getByRole('button')
      const icon = menuButton.querySelector('svg')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveAttribute('width', '24')
      expect(icon).toHaveAttribute('height', '24')
    })

    it('should have correct button styling', () => {
      render(<MenuItems />)

      const menuButton = screen.getByRole('button')
      expect(menuButton).toHaveClass(
        'sm:hidden cursor-pointer bg-primary-default rounded-lg border border-neutral-overlay shadow-menu justify-center items-center gap-1 inline-flex w-10 h-10'
      )
    })
  })
})
