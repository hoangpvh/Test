import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'

import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import TextInput from '@/components/atoms/TextInput'

const EmailInputGroup = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    if (!email) return
    console.log('Submitting email:', email)
  }

  return (
    <div
      data-testid="email-input-group"
      className="absolute w-343 xl:w-586 sm:w-560 h-32 lg:h-15 flex-col xl:flex-row justify-center left-1/2 transform -translate-x-1/2 mt-98 sm:mt-55 lg:mt-70 xl:mt-55 items-center lg:gap-5 gap-6 inline-flex"
    >
      <TextInput
        className="w-full"
        placeholder="Enter your email address"
        onChange={handleEmailChange}
        value={email}
      />
      <Button
        title="Send to us"
        onClick={handleSubmit}
        leftIcon={<Icon icon={FaEnvelope} size={20} color="#f0f1ff" />}
        className="w-full sm:max-w-full xl:max-w-200 lg:px-6 lg:py-3 px-4 py-3 sm:py-4 lg:py-3 bg-primary-default flex justify-center items-center gap-3"
      />
    </div>
  )
}

export default EmailInputGroup
