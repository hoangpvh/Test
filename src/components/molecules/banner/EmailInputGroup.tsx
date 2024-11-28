import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'

import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import TextInput from '@/components/atoms/TextInput'

const EmailInputGroup = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError('') // Clear error when user types
  }

  const handleSubmit = async () => {
    // Validate email
    if (!email) {
      setError('Vui lòng nhập email')
      return
    }

    if (!validateEmail(email)) {
      setError('Email không hợp lệ')
      return
    }

    setIsLoading(true)
    try {
      await emailjs.send(
        'service_r1404pk',
        'template_ww5aa56',
        {
          to_email: 'hhh28110101@gmail.com',
          from_email: email,
          message: `Người dùng ${email} đã đăng ký nhận thông báo`,
        },
        '3WsPc_1dJjxodHzik'
      )
      alert('Email đã được gửi thành công!')
      setEmail('')
    } catch (error) {
      console.error('Lỗi khi gửi email:', error)
      setError('Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      data-testid="email-input-group"
      className="absolute w-343 xl:w-586 sm:w-560 h-32 lg:h-15 flex-col xl:flex-row justify-center left-1/2 transform -translate-x-1/2 mt-98 sm:mt-55 lg:mt-70 xl:mt-55 items-start lg:gap-5 gap-6 inline-flex"
    >
      <div className="w-full relative">
        <TextInput
          className={`w-full ${error ? 'border-red-500' : ''}`}
          placeholder="Enter your email address"
          onChange={handleEmailChange}
          value={email}
        />
        {error && (
          <span className="absolute -bottom-7 left-0 text-red-500 text-sm">
            {error}
          </span>
        )}
      </div>
      <Button
        title={isLoading ? 'Sending...' : 'Send to us'}
        onClick={handleSubmit}
        leftIcon={<Icon icon={FaEnvelope} size={20} color="#f0f1ff" />}
        className="w-full sm:max-w-full xl:max-w-200 lg:px-6 px-4 py-3 sm:py-4 lg:py-3 bg-primary-default flex justify-center items-center gap-3"
        disabled={isLoading}
      />
    </div>
  )
}

export default EmailInputGroup
