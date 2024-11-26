import Image from 'next/image'
import { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import FooterLink from '@/components/molecules/footer/FooterLink'

const Footer = () => {
  const [message, setMessage] = useState('')

  return (
    <footer className="h-[526px] pt-[100px] pb-[200px] bg-[#252a3f]">
      <div className="max-w-[1200px] mx-auto justify-between flex">
        {/* Left Section */}
        <div className="h-[182px] flex justify-between">
          {/* Logo and Contact */}
          <div className="flex flex-col gap-[34px]">
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
            <div className="flex flex-col gap-3">
              <div className="text-[#7f879e] text-lg font-medium font-plus-jakarta leading-loose">
                funcoding@gmail.com
                <br />
                (+00) 001123344546
              </div>
              <div className="text-[#7f879e] text-lg font-medium font-plus-jakarta leading-loose">
                Tokyo - Japan
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-20 ml-20">
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
        <div className="w-[530px] flex flex-col gap-4">
          <h2 className="text-white text-2xl font-bold font-helvetica capitalize leading-[31.20px]">
            What solution do you need us to provide?
          </h2>
          <div className="flex flex-col gap-4">
            {/* Direct input implementation */}
            <div className="h-[119px] px-6 py-4 bg-[#2e334b] rounded-xl">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter the content you want to send!"
                className="w-full h-full resize-none bg-transparent outline-none text-xl font-normal font-helvetica text-white/50 leading-7"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <Icon icon={BsCheckCircleFill} color="#268D61" />
                <span className="text-[#7f879e] text-lg font-normal font-plus-jakarta leading-[28.80px]">
                  Available to respond
                </span>
              </div>
              <Button title="Send Email" className="bg-[#565add] px-6 py-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
