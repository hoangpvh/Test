import type { AppProps } from 'next/app'

import Banner from '@/components/organisms/banner/Banner'
import Header from '@/components/organisms/header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-[5676px] flex flex-col items-center justify-start">
      <Header />
      <Banner />
    </div>
  )
}

export default MyApp
