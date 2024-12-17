export const techList = [
  {
    className:
      'xl:w-1448 sm:w-5/6 w-343 h-10 lg:h-30 mt-5 sm:mt-152 lg:mt-30 xl:-mt-12 flex justify-between items-center',
    logos: [
      { name: 'Notion Logomark', alt: 'Notion Logo' },
      { name: 'Webflow Logomark', alt: 'Webflow Logo' },
    ],
  },
  {
    className:
      'xl:w-1056 sm:w-3/5 w-230 h-10 lg:h-30 sm:mt-8 -mt-13 flex justify-between items-center',
    logos: [
      { name: 'Shopify Logomark', alt: 'Shopify Logo' },
      { name: 'Wordpress Logomark', alt: 'Wordpress Logo' },
    ],
  },
  {
    className:
      ' xl:w-636 w-118 sm:w-2/6 h-10 sm:h-30 -mt-4 sm:-mt-2 flex justify-between items-center',
    logos: [
      { name: 'Visual Studio Code', alt: 'Visual Code Logo' },
      { name: 'Figma Logomark', alt: 'Figma Logo' },
    ],
  },
]

export const menuItems = [
  { key: 'home', href: '/#top', label: 'Home', scrollTo: 'top' },
  {
    key: 'products',
    href: '/#products',
    label: 'Our Products',
    scrollTo: 'products',
  },
  { key: 'blogs', href: '/#solutions', label: 'Blogs', scrollTo: 'solutions' },
  {
    key: 'contact',
    href: '/#contact',
    label: 'Contact Us',
    scrollTo: 'contact',
  },
]

import {
  LuCode2,
  LuMonitorSmartphone,
  LuPencilRuler,
  LuShieldCheck,
} from 'react-icons/lu'

export const solutions = [
  {
    title: 'Custom Software Development',
    description:
      'Tailored software solutions designed to meet specific business needs and objectives.',
    icon: LuCode2,
  },
  {
    title: 'Web & Mobile Application Development',
    description:
      'Development of responsive web apps and native or cross-platform mobile apps.',
    icon: LuMonitorSmartphone,
  },
  {
    title: 'Product Design and Prototyping',
    description:
      'Designing and prototyping digital products to refine ideas and validate concepts before full development.',
    icon: LuPencilRuler,
  },
  {
    title: 'Product Maintenance and Support',
    description:
      'Ongoing technical support and maintenance to keep software updated, secure.',
    icon: LuShieldCheck,
  },
]

export const services1 = [
  {
    label: 'Web & Mobile Application',
    gradientFrom: '#f2dbff',
    gradientTo: '#f0f1ff',
    borderColor: '#bc77e4',
  },
  {
    label: 'Cloud Solutions',
    gradientFrom: '#caffce',
    gradientTo: '#f0f1ff',
    borderColor: '#6ace73',
  },
  {
    label: 'Software Development',
    gradientFrom: '#ccf7ff',
    gradientTo: '#f0f1ff',
    borderColor: '#34c2dd',
  },
  {
    label: 'Product Design',
    gradientFrom: '#d2d5ff',
    gradientTo: '#f0f1ff',
    borderColor: '#565add',
  },
]

export const services2 = [
  {
    label: 'Artificial Intelligence',
    gradientFrom: '#caffce',
    gradientTo: '#f0f1ff',
    borderColor: '#6ace73',
  },
  {
    label: 'Product Design',
    gradientFrom: '#d2d5ff',
    gradientTo: '#f0f1ff',
    borderColor: '#565add',
  },
  {
    label: 'Big Data & Analytics',
    gradientFrom: '#f2dbff',
    gradientTo: '#f0f1ff',
    borderColor: '#bc77e4',
  },
  {
    label: 'Maintenance and Support',
    gradientFrom: '#ccf7ff',
    gradientTo: '#f0f1ff',
    borderColor: '#34c2dd',
  },
]
