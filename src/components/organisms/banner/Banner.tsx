import { techList } from '@/assets/data'
import ContentSection from '@/components/molecules/banner/ContentSection'
import EmailInputGroup from '@/components/molecules/banner/EmailInputGroup'
import TechRow from '@/components/molecules/banner/TechRow'

const Banner: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mt-60 mt-20 sm:mt-31 -z-100">
      <ContentSection />
      {techList.map((tech, index) => (
        <TechRow key={index} className={tech.className} logos={tech.logos} />
      ))}
      <EmailInputGroup />
    </div>
  )
}

export default Banner
