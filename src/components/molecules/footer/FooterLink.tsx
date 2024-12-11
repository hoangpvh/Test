import { useTranslations } from 'next-intl'

interface FooterLinkProps {
  section: 'about' | 'support'
  links: Array<{
    key: string
    href: string
  }>
}

const FooterLink: React.FC<FooterLinkProps> = ({ section, links }) => {
  const t = useTranslations('footer')

  return (
    <div className="flex flex-col sm:gap-8 gap-6">
      <h3 className="text-white text-lg font-bold font-helvetica leading-normal">
        {t(section)}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-text-neutral text-base font-normal sm:font-medium sm:font-helvetica font-helvetica sm:leading-loose leading-7"
          >
            {t(`links.${link.key}`)}
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterLink
