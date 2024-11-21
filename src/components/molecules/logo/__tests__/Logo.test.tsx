import { render, screen } from '@testing-library/react'
import React from 'react'

import Logo from '@/components/molecules/logo/Logo'

describe('Logo Component', () => {
  describe('Logo Rendering', () => {
    it('should render desktop logo image', () => {
      render(<Logo />)
      const desktopLogo = screen.getByAltText('Desktop Logo')
      expect(desktopLogo).toBeInTheDocument()
      expect(desktopLogo).toHaveAttribute(
        'src',
        expect.stringContaining('Logo.svg')
      )
    })

    it('should render mobile logo image', () => {
      render(<Logo />)
      const mobileLogo = screen.getByAltText('Mobile Logo')
      expect(mobileLogo).toBeInTheDocument()
      expect(mobileLogo).toHaveAttribute(
        'src',
        expect.stringContaining('Mobile Logo.svg')
      )
    })

    it('should render company name', () => {
      render(<Logo />)
      expect(screen.getByText('Funcoding')).toBeInTheDocument()
    })

    it('should render images with correct dimensions', () => {
      render(<Logo />)
      const images = screen.getAllByRole('img')
      images.forEach((img) => {
        expect(img).toHaveClass('object-contain')
      })
    })
  })

  describe('Image Component Props', () => {
    it('should have correct desktop image props', () => {
      render(<Logo />)
      const desktopImage = screen.queryByAltText('Desktop Logo')
      expect(desktopImage).toHaveAttribute('width', '40')
      expect(desktopImage).toHaveAttribute('height', '40')
    })

    it('should have correct mobile image props', () => {
      render(<Logo />)
      const mobileImage = screen.queryByAltText('Mobile Logo')
      expect(mobileImage).toHaveAttribute('width', '24')
      expect(mobileImage).toHaveAttribute('height', '24')
    })
  })
})
