import { techList } from '@/assets/data'
import ContentSection from '@/components/molecules/banner/ContentSection'
import TechRow from '@/components/molecules/banner/TechRow'

const Banner: React.FC = () => {
  return (
    <div
      data-testid="banner-container"
      className="w-full flex flex-col items-center lg:mt-60 my-20 sm:my-31 -z-100"
    >
      <ContentSection />
      {techList.map((tech, index) => (
        <TechRow key={index} className={tech.className} logos={tech.logos} />
      ))}
    </div>
  )
}

export default Banner
