interface FooterLinkProps {
  title: string
  links: string[]
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col sm:gap-8 gap-6">
      <h3 className="text-white text-lg font-bold font-helvetica leading-normal">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-text-neutral text-base font-normal sm:font-medium sm:font-helvetica font-helvetica sm:leading-loose leading-7  "
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterLink
