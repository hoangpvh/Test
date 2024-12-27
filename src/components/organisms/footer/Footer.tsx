import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import EmailInputGroup from '@/components/molecules/email/EmailInputGroup'
import FooterLink from '@/components/molecules/footer/FooterLink'

const Footer = () => {
  const t = useTranslations('footer')
  const [message, setMessage] = useState('')

  const aboutLinks = [
    { key: 'aboutUs', href: '#' },
    { key: 'solutions', href: '#' },
  ]

  const supportLinks = [
    { key: 'faq', href: '#' },
    { key: 'employers', href: '#' },
  ]

  return (
    <footer
      id="contact"
      className="lg:flex py-20 sm:pt-20 sm:pb-25 xl:pt-25 xl:pb-50 sm:px-15 px-4 bg-primary-dark lg:justify-center"
    >
      <div className="xl:w-1200 flex flex-col xl:flex-row gap-20 sm:gap-10">
        <div className="flex justify-between sm:flex-row flex-col gap-10">
          <div className="flex flex-col gap-6 sm:gap-34 xl:w-306">
            <div className="items-center justify-start gap-3 inline-flex">
              <div>
                <Image
                  src="/images/Logo.svg"
                  alt={t('logoAlt')}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-white text-32 font-bold font-seravek uppercase">
                {t('companyName')}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-text-neutral sm:text-lg text-sm font-normal sm:font-medium font-helvetica sm:leading-loose leading-25.20">
                {t('email')}
              </div>
              <div className="text-text-neutral sm:text-lg text-sm font-normal sm:font-medium font-helvetica sm:leading-loose leading-25.20">
                {t('address')}
              </div>
            </div>
          </div>

          <div className="flex gap-16">
            <FooterLink section="about" links={aboutLinks} />
            <FooterLink section="support" links={supportLinks} />
          </div>
        </div>

        <div className="[html[lang='en']_&]:xl:w-530 xl:w-480 flex flex-col gap-6">
          <h2 className="text-white sm:text-2xl text-base font-bold font-helvetica capitalize">
            {t('contactTitle')}
          </h2>
          <div className="flex flex-col gap-4">
            {/* Direct input implementation */}
            <div className="h-119 px-6 py-4 bg-secondary rounded-xl">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('messagePlaceholder')}
                className="w-full h-full resize-none bg-transparent outline-none sm:text-xl text-sm font-normal font-helvetica text-[#B8C5C6] leading-7 placeholder:text-[#B8C5C6]"
              />
            </div>
          </div>
          <EmailInputGroup message={message} setMessage={setMessage} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
