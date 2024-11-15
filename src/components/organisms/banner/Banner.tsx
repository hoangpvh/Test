import { platformsList } from '@/assets/data'
import ContentSection from '@/components/molecules/banner/ContentSection'
import EmailInputGroup from '@/components/molecules/banner/EmailInputGroup'
import PlatformCard from '@/components/molecules/banner/PlatformCard'

const Banner: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mt-[239px] mt-[180px] -z-100">
      <ContentSection />
      {platformsList.map((platform, index) => (
        <PlatformCard
          key={index}
          className={platform.className}
          platforms={platform.platforms}
        />
      ))}
      <EmailInputGroup />
    </div>
  )
}

export default Banner
