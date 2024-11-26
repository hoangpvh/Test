interface FooterLinkProps {
  title: string
  links: string[]
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-white text-lg font-bold font-helvetica leading-normal">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-[#7f879e] text-lg font-medium font-plus-jakarta leading-loose"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterLink
