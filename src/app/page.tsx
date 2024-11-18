import Banner from '@/components/organisms/banner/Banner'
import Header from '@/components/organisms/header/Header'

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Header />
      <Banner />
    </div>
  )
}

export default HomePage
