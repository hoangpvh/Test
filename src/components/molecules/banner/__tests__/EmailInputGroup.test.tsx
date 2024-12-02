import emailjs from '@emailjs/browser'
import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(() => Promise.resolve()),
}))

import EmailInputGroup from '@/components/molecules/banner/EmailInputGroup'

describe('EmailInputGroup Component', () => {
  let mockConsoleError: jest.SpyInstance

  beforeEach(() => {
    mockConsoleError = jest.spyOn(console, 'error').mockImplementation()
    render(<EmailInputGroup />)
  })

  afterEach(() => {
    mockConsoleError.mockRestore()
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render the input field with correct placeholder', () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      expect(input).toBeInTheDocument()
    })

    it('should render the submit button with correct text and icon', () => {
      const button = screen.getByRole('button', { name: /send to us/i })
      expect(button).toBeInTheDocument()
      expect(button.querySelector('svg')).toBeInTheDocument()
    })

    it('should have correct button styles', () => {
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'w-full sm:max-w-full xl:max-w-200 lg:px-6 lg:py-3 px-4 py-3 bg-primary-default flex justify-center items-center gap-3'
      )
    })

    it('should not show validation icon when email is empty', () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      expect(screen.queryByTestId('icon-check')).not.toBeInTheDocument()
      expect(screen.queryByTestId('icon-times')).not.toBeInTheDocument()
    })
  })

  describe('Functionality', () => {
    it('should update email value on input change', () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      fireEvent.change(input, { target: { value: 'test@example.com' } })
      expect(input).toHaveValue('test@example.com')
    })

    it('should not call submit handler when email is empty', () => {
      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(mockConsoleError).not.toHaveBeenCalled()
    })

    it('should maintain email state between interactions', () => {
      const input = screen.getByPlaceholderText('Enter your email address')

      fireEvent.change(input, { target: { value: 'test@example.com' } })
      expect(input).toHaveValue('test@example.com')

      fireEvent.change(input, { target: { value: 'new@example.com' } })
      expect(input).toHaveValue('new@example.com')
    })

    it('should not submit with empty email', () => {
      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(mockConsoleError).not.toHaveBeenCalled()
    })
  })

  describe('Responsive Design', () => {
    it('should have responsive classes', () => {
      const container = screen.getByTestId('email-input-group')
      expect(container).toHaveClass(
        'w-343 sm:w-560 xl:w-586 flex-col xl:flex-row mt-98 sm:mt-55 lg:mt-70 xl:mt-55'
      )

      const button = screen.getByRole('button')
      expect(button).toHaveClass('w-full sm:max-w-full xl:max-w-200')
    })
  })

  describe('Email Validation', () => {
    it('should show validation icon when email is entered', () => {
      const input = screen.getByPlaceholderText('Enter your email address')

      // Invalid email
      fireEvent.change(input, { target: { value: 'invalid-email' } })
      expect(screen.getByTestId('icon-times')).toBeInTheDocument()

      // Valid email
      fireEvent.change(input, { target: { value: 'test@example.com' } })
      expect(screen.getByTestId('icon-check')).toBeInTheDocument()
    })

    it('should display error message for invalid email format', () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      fireEvent.change(input, { target: { value: 'invalid-email' } })
      fireEvent.click(button)

      expect(screen.getByText('Invalid email format')).toBeInTheDocument()
    })

    it('should display error message for empty email', () => {
      const button = screen.getByRole('button')
      fireEvent.click(button)

      expect(screen.getByText('Please enter your email')).toBeInTheDocument()
    })

    it('should validate various email formats', () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      const testCases = [
        { email: 'test@example', valid: false },
        { email: 'test@example.', valid: false },
        { email: '@example.com', valid: false },
        { email: 'test@.com', valid: false },
        { email: 'test@example.com', valid: true },
        { email: 'test+label@example.com', valid: true },
        { email: 'test.name@example.co.uk', valid: true },
      ]

      testCases.forEach(({ email, valid }) => {
        fireEvent.change(input, { target: { value: email } })
        if (valid) {
          expect(screen.getByTestId('icon-check')).toBeInTheDocument()
        } else {
          expect(screen.getByTestId('icon-times')).toBeInTheDocument()
        }
      })
    })
  })

  describe('Loading State', () => {
    it('should show loading state while submitting', async () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      fireEvent.change(input, { target: { value: 'test@example.com' } })
      fireEvent.click(button)

      expect(screen.getByText('Sending...')).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('should re-enable button after successful submission', async () => {
      const mockAlert = jest.spyOn(window, 'alert').mockImplementation()
      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      await act(async () => {
        fireEvent.change(input, { target: { value: 'test@example.com' } })
        fireEvent.click(button)
      })

      expect(button).not.toBeDisabled()
      expect(button).toHaveTextContent('Send to us')
      mockAlert.mockRestore()
    })
  })

  describe('Error Handling', () => {
    it('should clear error message when user types', () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      // Trigger error first
      fireEvent.click(button)
      expect(screen.getByText('Please enter your email')).toBeInTheDocument()

      // Error should clear when typing
      fireEvent.change(input, { target: { value: 't' } })
      expect(
        screen.queryByText('Please enter your email')
      ).not.toBeInTheDocument()
    })

    it('should handle emailjs.send failure', async () => {
      const mockError = new Error('Failed to send email')
      ;(emailjs.send as jest.Mock).mockRejectedValueOnce(mockError)

      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      await act(async () => {
        fireEvent.change(input, { target: { value: 'test@example.com' } })
        fireEvent.click(button)
      })

      expect(
        screen.getByText(
          'An error occurred while sending email. Please try again later.'
        )
      ).toBeInTheDocument()
      expect(mockConsoleError).toHaveBeenCalledWith(
        'Error sending email:',
        mockError
      )
    })

    it('should clear error state when typing after an error', async () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      // Trigger error
      fireEvent.click(button)
      expect(screen.getByText('Please enter your email')).toBeInTheDocument()

      // Start typing
      await act(async () => {
        fireEvent.change(input, { target: { value: 't' } })
      })

      expect(
        screen.queryByText('Please enter your email')
      ).not.toBeInTheDocument()
    })
  })

  describe('Form Reset', () => {
    it('should reset form after successful submission', async () => {
      const mockAlert = jest.spyOn(window, 'alert').mockImplementation()
      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      await act(async () => {
        fireEvent.change(input, { target: { value: 'test@example.com' } })
        fireEvent.click(button)
      })

      expect(input).toHaveValue('')
      expect(screen.queryByTestId('icon-check')).not.toBeInTheDocument()
      expect(screen.queryByTestId('icon-times')).not.toBeInTheDocument()
      mockAlert.mockRestore()
    })
  })

  describe('Button Interaction', () => {
    it('should maintain button styles when disabled', async () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      await act(async () => {
        fireEvent.change(input, { target: { value: 'test@example.com' } })
        fireEvent.click(button)
      })

      expect(button).toHaveClass(
        'w-full sm:max-w-full xl:max-w-200 lg:px-6 px-4 py-3 sm:py-4 lg:py-3 bg-primary-default flex justify-center items-center gap-3'
      )
    })
  })
})
