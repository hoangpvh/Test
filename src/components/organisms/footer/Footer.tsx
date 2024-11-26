import Image from 'next/image'
import { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import FooterLink from '@/components/molecules/footer/FooterLink'

const Footer = () => {
  const [message, setMessage] = useState('')

  return (
    <footer className="lg:flex h-auto py-20 sm:pt-20 sm:pb-25 xl:pt-25 xl:pb-50 sm:px-15 px-4 xl:px-0 bg-[#252a3f] lg:justify-center">
      <div className="xl:max-w-[1200px] lg:max-w-[920px] flex flex-col xl:flex-row gap-20 sm:gap-10">
        {/* Left Section */}
        <div className="sm:h-[182px] h-[312px] flex justify-between sm:flex-row flex-col gap-10">
          {/* Logo and Contact */}
          <div className="flex flex-col gap-6 sm:gap-[34px]">
            {/* Simplified Logo */}
            <div className="items-center justify-start gap-3 inline-flex">
              <div className="w-10 h-10">
                <Image
                  src="/Logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-white text-32 font-bold font-seravek uppercase">
                Funcoding
              </div>
            </div>
            <div className="flex flex-row sm:flex-col gap-5 sm:gap-3">
              <div className="text-[#7f879e] sm:text-lg text-sm font-normal sm:font-medium font-plus-jakarta sm:leading-loose leading-[25.20px]">
                funcoding@gmail.com
                <br />
                (+00) 001123344546
              </div>
              <div className="text-[#7f879e] sm:text-lg text-sm font-normal sm:font-medium font-plus-jakarta sm:leading-loose leading-[25.20px]">
                Tokyo - Japan
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-20">
            <FooterLink
              title="Company"
              links={['About us', 'Solutions', 'Blog']}
            />
            <FooterLink
              title="Support"
              links={['Career Center', 'FAQ', 'Eployeers']}
            />
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="xl:w-[530px] flex flex-col gap-4">
          <h2 className="text-white sm:text-2xl text-base font-bold font-helvetica capitalize">
            What solution do you need us to provide?
          </h2>
          <div className="flex flex-col gap-4">
            {/* Direct input implementation */}
            <div className="h-[119px] px-6 py-4 bg-[#2e334b] rounded-xl">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter the content you want to send!"
                className="w-full h-full resize-none bg-transparent outline-none sm:text-xl text-sm font-normal font-helvetica text-white/50 leading-7"
              />
            </div>

            <div className="flex sm:justify-between sm:flex-row flex-col items-start sm:items-center gap-4">
              <div className="flex items-center gap-2.5">
                <Icon icon={BsCheckCircleFill} color="#268D61" />
                <span className="text-[#7f879e] sm:text-lg text-sm font-normal font-plus-jakarta sm:leading-[28.80px] leading-snug">
                  Available to respond
                </span>
              </div>
              <Button
                title="Send Email"
                className="bg-[#565add] px-6 sm:py-2 py-3 xl:h-[52px] xl:w-[180px] sm:w-[480px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
