import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import Header from '@/components/organisms/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6">
      <Header />
    </div>
  )
}

export default MyApp;
