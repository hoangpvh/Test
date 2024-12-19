import { techList } from '@/assets/data'
import ContentSection from '@/components/molecules/banner/ContentSection'
import TechRow from '@/components/molecules/banner/TechRow'

const Banner: React.FC = () => {
  return (
    <div
      data-testid="banner-container"
      className="w-full h-auto flex flex-col items-center lg:mt-60 mt-20 sm:mt-31 -z-100"
    >
      <ContentSection />
    </div>
  )
}

export default Banner
