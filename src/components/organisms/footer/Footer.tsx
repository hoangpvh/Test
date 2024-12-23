import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import FooterLink from '@/components/molecules/footer/FooterLink'

const Footer = () => {
  const t = useTranslations('footer')
  const [message, setMessage] = useState('')

  const aboutLinks = [
    { key: 'aboutUs', href: '#' },
    { key: 'solutions', href: '#' },
    { key: 'blog', href: '#' },
  ]

  const supportLinks = [
    { key: 'careerCenter', href: '#' },
    { key: 'faq', href: '#' },
    { key: 'employers', href: '#' },
  ]

  return (
    <footer
      id="contact"
      className="lg:flex h-auto py-20 sm:pt-20 sm:pb-25 xl:pt-25 xl:pb-50 sm:px-15 px-4 xl:px-0 bg-primary-dark lg:justify-center"
    >
      <div className="xl:max-w-1200 lg:max-w-920 flex flex-col xl:flex-row gap-20 sm:gap-10">
        <div className="sm:h-182 h-312 flex justify-between sm:flex-row flex-col gap-10">
          <div className="flex flex-col gap-6 sm:gap-34 xl:w-306">
            <div className="items-center justify-start gap-3 inline-flex">
              <div className="w-10 h-10">
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

        <div className="[html[lang='en']_&]:xl:w-530 [html[lang='ja']_&]:xl:w-480 flex flex-col gap-4">
          <h2 className="text-white sm:text-2xl text-base font-bold font-helvetica capitalize">
            {t('contactTitle')}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="h-119 px-6 py-4 bg-primary-dark2 rounded-xl">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('messagePlaceholder')}
                className="w-full h-full resize-none bg-transparent outline-none sm:text-xl text-sm font-normal font-helvetica text-white/50 leading-7"
              />
            </div>

            <div className="flex sm:justify-between sm:flex-row flex-col items-start sm:items-center gap-4">
              <div className="flex items-center gap-2.5">
                <Icon icon={BsCheckCircleFill} color="#268D61" />
                <span className="text-text-neutral sm:text-lg text-sm font-normal font-helvetica sm:leading-28.80 leading-snug">
                  {t('availableToRespond')}
                </span>
              </div>
              <Button
                title={t('sendButton')}
                className="bg-primary-default px-6 sm:py-2 py-3 xl:h-13 xl:w-180 sm:w-480 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
