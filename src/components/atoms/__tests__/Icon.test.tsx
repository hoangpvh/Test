import { render, screen } from '@testing-library/react'
import { FaEnvelope, FaHeart, FaUser } from 'react-icons/fa'

import Icon from '@/components/atoms/Icon'

describe('Icon Component', () => {
  const renderIcon = (props = {}) => {
    return render(<Icon data-testid="icon" icon={FaUser} {...props} />)
  }

  describe('Default Props', () => {
    beforeEach(() => {
      renderIcon()
    })

    it('should render with default size of 24', () => {
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('width', '24')
      expect(icon).toHaveAttribute('height', '24')
    })

    it('should render with default white color', () => {
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('color', 'white')
    })

    it('should be an SVG element', () => {
      const icon = screen.getByTestId('icon')
      expect(icon.tagName.toLowerCase()).toBe('svg')
    })
  })

  describe('Custom Props', () => {
    it('should render with custom size', () => {
      renderIcon({ size: 32 })
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('width', '32')
      expect(icon).toHaveAttribute('height', '32')
    })

    it('should render with custom color', () => {
      renderIcon({ color: '#FF0000' })
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('color', '#FF0000')
    })
  })

  describe('Different Icons', () => {
    it('should render different icon components correctly', () => {
      const icons = [
        { component: FaUser, id: 'user-icon' },
        { component: FaHeart, id: 'heart-icon' },
        { component: FaEnvelope, id: 'envelope-icon' },
      ]

      const { rerender } = render(<></>)

      icons.forEach(({ component, id }) => {
        rerender(<Icon data-testid={id} icon={component} />)
        const icon = screen.getByTestId(id)
        expect(icon).toBeInTheDocument()
        expect(icon.tagName.toLowerCase()).toBe('svg')
      })
    })
  })

  describe('Multiple Props', () => {
    it('should render with multiple custom props correctly', () => {
      const props = {
        icon: FaUser,
        size: 48,
        color: '#00FF00',
        className: 'custom-class',
        'data-testid': 'icon',
      }

      render(<Icon {...props} />)
      const icon = screen.getByTestId('icon')

      expect(icon).toHaveAttribute('width', '48')
      expect(icon).toHaveAttribute('height', '48')
      expect(icon).toHaveAttribute('color', '#00FF00')
      expect(icon).toHaveClass('custom-class')
      expect(icon.tagName.toLowerCase()).toBe('svg')
    })
  })
})
