const TEST_EMAIL_CONFIG = {
  SERVICE_ID: 'service_r1404pk',
  TEMPLATE_ID: 'template_ww5aa56',
  ADMIN_EMAIL: 'hhh28110101@gmail.com',
  PUBLIC_KEY: '3WsPc_1dJjxodHzik',
}

const PROD_EMAIL_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  ADMIN_EMAIL: process.env.NEXT_PUBLIC_ADMIN_EMAIL || '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
}

export const EMAIL_CONFIG =
  process.env.NODE_ENV !== 'production' ? TEST_EMAIL_CONFIG : PROD_EMAIL_CONFIG
