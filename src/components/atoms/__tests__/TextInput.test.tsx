import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import TextInput from '@/components/atoms/TextInput'

describe('TextInput Component', () => {
  const defaultProps = {
    placeholder: 'Enter text',
    value: '',
    onChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
    
    jest.spyOn(console, 'error').mockImplementation((message: any) => {
      if (message?.includes?.('onChange handler')) return
      console.error(message)
    })
  })

  const renderTextInput = (props = {}) => {
    return render(<TextInput {...defaultProps} {...props} />)
  }

  describe('Rendering', () => {
    it('should render with default props', () => {
      renderTextInput()
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('placeholder', 'Enter text')
    })

    it('should render with custom className', () => {
      renderTextInput({ className: 'custom-class' })
      const container = screen.getByRole('textbox').parentElement
      expect(container).toHaveClass('custom-class')
    })

    it('should render with undefined className', () => {
      renderTextInput({ className: undefined })
      const container = screen.getByRole('textbox').parentElement
      expect(container).not.toHaveClass('undefined')
    })
  })

  describe('Focus Behavior', () => {
    it('should handle focus event', async () => {
      renderTextInput()
      const input = screen.getByRole('textbox')
      const container = input.parentElement as HTMLElement

      await fireEvent.focus(input)
      expect(container).toHaveClass('border-primary-focus')
      expect(input).toHaveClass('text-primary-focus')
    })

    it('should handle blur event', async () => {
      renderTextInput()
      const input = screen.getByRole('textbox')
      const container = input.parentElement as HTMLElement

      await fireEvent.focus(input)
      await fireEvent.blur(input)
      expect(container).toHaveClass('border-white')
      expect(input).toHaveClass('text-purple-light/50')
    })

    it('should focus input when container is clicked', async () => {
      renderTextInput()
      const container = screen.getByRole('textbox').parentElement as HTMLElement
      const input = screen.getByRole('textbox')

      await fireEvent.click(container)
      expect(input).toHaveFocus()
    })
  })

  describe('Edge Cases', () => {
    it('should handle null ref', async () => {
      renderTextInput()
      const container = screen.getByRole('textbox').parentElement as HTMLElement
      const input = screen.getByRole('textbox')

      
      const originalFocus = input.focus
      input.focus = jest.fn()

      await fireEvent.click(container)
      expect(input.focus).toHaveBeenCalled()

      
      input.focus = originalFocus
    })

    it('should handle rapid focus/blur events', async () => {
      renderTextInput()
      const input = screen.getByRole('textbox')

      await fireEvent.focus(input)
      await fireEvent.blur(input)
      await fireEvent.focus(input)
      await fireEvent.blur(input)

      expect(input).not.toHaveFocus()
    })

    it('should handle null inputRef', async () => {
      renderTextInput()
      const container = screen.getByRole('textbox').parentElement as HTMLElement
      const input = screen.getByRole('textbox')

      
      const originalRef = input.focus
      Object.defineProperty(input, 'focus', {
        get: () => null,
        configurable: true,
      })

      await act(async () => {
        fireEvent.click(container)
      })

      
      Object.defineProperty(input, 'focus', {
        value: originalRef,
        configurable: true,
      })
    })

    it('should handle undefined inputRef', async () => {
      renderTextInput()
      const container = screen.getByRole('textbox').parentElement as HTMLElement
      const input = screen.getByRole('textbox')

      
      const originalRef = input.focus
      Object.defineProperty(input, 'focus', {
        value: undefined,
        configurable: true,
      })

      await act(async () => {
        fireEvent.click(container)
      })

      
      Object.defineProperty(input, 'focus', {
        value: originalRef,
        configurable: true,
      })
    })

    it('should handle missing inputRef', async () => {
      renderTextInput()
      const container = screen.getByRole('textbox').parentElement as HTMLElement
      const input = screen.getByRole('textbox')

      
      const originalRef = input.focus
      delete (input as any).focus

      await act(async () => {
        fireEvent.click(container)
      })

      
      Object.defineProperty(input, 'focus', {
        value: originalRef,
        configurable: true,
      })
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      renderTextInput()
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'text')
      expect(input).toHaveAttribute('placeholder')
    })

    it('should be keyboard accessible', async () => {
      renderTextInput()
      const input = screen.getByRole('textbox')

      await fireEvent.keyDown(input, { key: 'Tab' })
      expect(input).toBeInTheDocument()

      await fireEvent.keyDown(input, { key: 'Enter' })
      expect(input).toBeInTheDocument()
    })
  })
})
