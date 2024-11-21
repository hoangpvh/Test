import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import EmailInputGroup from '@/components/molecules/banner/EmailInputGroup'

describe('EmailInputGroup Component', () => {
  let mockConsoleLog: jest.SpyInstance

  beforeEach(() => {
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation()
    render(<EmailInputGroup />)
  })

  afterEach(() => {
    mockConsoleLog.mockRestore()
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

    it('should have correct container styles', () => {
      const container = screen.getByTestId('email-input-group')
      expect(container).toHaveClass(
        'absolute w-343 xl:w-586 sm:w-560 h-32 lg:h-15 flex-col xl:flex-row justify-center left-1/2 transform -translate-x-1/2 mt-98 sm:mt-55 lg:mt-70 xl:mt-55 items-center lg:gap-5 gap-6 inline-flex'
      )
    })

    it('should have correct button styles', () => {
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'w-full sm:max-w-full xl:max-w-200 lg:px-6 lg:py-3 px-4 py-3 bg-primary-default flex justify-center items-center gap-3'
      )
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
      expect(mockConsoleLog).not.toHaveBeenCalled()
    })

    it('should maintain email state between interactions', () => {
      const input = screen.getByPlaceholderText('Enter your email address')

      fireEvent.change(input, { target: { value: 'test@example.com' } })
      expect(input).toHaveValue('test@example.com')

      fireEvent.change(input, { target: { value: 'new@example.com' } })
      expect(input).toHaveValue('new@example.com')
    })

    it('should call console.log with email when submitted', () => {
      const input = screen.getByPlaceholderText('Enter your email address')
      const button = screen.getByRole('button')

      // Type an email and submit
      fireEvent.change(input, { target: { value: 'test@example.com' } })
      fireEvent.click(button)

      // Check if console.log was called with the correct arguments
      expect(mockConsoleLog).toHaveBeenCalledWith(
        'Submitting email:',
        'test@example.com'
      )
    })

    it('should not submit with empty email', () => {
      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(mockConsoleLog).not.toHaveBeenCalled()
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
})
