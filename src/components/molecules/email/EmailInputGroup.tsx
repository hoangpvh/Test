import { send } from '@emailjs/browser'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify'

import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import TextInput from '@/components/atoms/TextInput'
import { EMAIL_CONFIG } from '@/config/email'

interface EmailInputGroupProps {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
}

const EmailInputGroup: React.FC<EmailInputGroupProps> = ({
  message,
  setMessage,
}) => {
  const t = useTranslations('email')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateEmail = (email: string) => emailRegex.test(email)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setError('') 
    setIsValidEmail(validateEmail(newEmail))
  }

  const handleSubmit = async () => {
    if (!email) {
      setError(t('error.required'))
      return
    }

    if (!validateEmail(email)) {
      setError(t('error.invalid'))
      return
    }

    setIsLoading(true)
    try {
      await send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          to_email: EMAIL_CONFIG.ADMIN_EMAIL,
          from_email: email,
          message: `User ${email} has subscribed to notifications.
          Message: ${message}`,
        },
        EMAIL_CONFIG.PUBLIC_KEY
      )
      toast.success('Email sent successfully!')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Error sending email:', error)
      setError(t('error.failed'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      data-testid="email-input-group"
      className="w-full flex-col sm:flex-row justify-between items-center gap-8 sm:gap-6 inline-flex"
    >
      <div className="w-full relative">
        <div className="relative">
          <TextInput
            id="email"
            name="email"
            autoComplete="email"
            className={`w-full text-sm sm:text-xl ${error ? 'border-primary-focus' : ''}`}
            placeholder={t('placeholder')}
            onChange={handleEmailChange}
            value={email}
          />
          {email && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Icon
                icon={isValidEmail ? FaCheck : FaTimes}
                size={16}
                color={isValidEmail ? '#22c55e' : '#ef4444'}
                data-testid={isValidEmail ? 'icon-check' : 'icon-times'}
              />
            </div>
          )}
        </div>
        {error && (
          <span className="absolute -bottom-6 left-0 text-red-500 text-sm">
            {error}
          </span>
        )}
      </div>
      <Button
        title={isLoading ? 'Sending...' : t('button')}
        onClick={handleSubmit}
        className="w-full sm:w-1/2 h-11 px-6 py-2 bg-primary-default flex justify-center items-center"
        titleClassName="sm:text-[20px] font-normal"
        disabled={isLoading}
      />
    </div>
  )
}

export default EmailInputGroup
