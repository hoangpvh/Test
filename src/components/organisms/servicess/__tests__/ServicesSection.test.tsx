import { render, screen } from '@testing-library/react'
import React from 'react'

import { services1, services2 } from '@/assets/data'
import ServicesSection from '@/components/organisms/servicess/ServicesSection'

describe('ServicesSection', () => {
  it('renders all services from services1', () => {
    render(<ServicesSection />)

    services1.forEach((service) => {
      const serviceElements = screen.getAllByText(service.label)
      expect(serviceElements.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders all services from services2', () => {
    render(<ServicesSection />)

    services2.forEach((service) => {
      const serviceElements = screen.getAllByText(service.label)
      expect(serviceElements.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders with correct container classes', () => {
    const { container } = render(<ServicesSection />)
    const mainDiv = container.firstChild
    expect(mainDiv).toHaveClass(
      'w-full px-4 sm:px-0 py-10 xl:py-50 sm:py-40 flex flex-col justify-start items-center gap-5 sm:gap-15'
    )
  })

  it('renders correct number of ServiceRow components', () => {
    render(<ServicesSection />)
    const totalServices = services1.length + services2.length
    const serviceElements = screen.getAllByText(/./i)
    expect(serviceElements.length).toBeGreaterThanOrEqual(totalServices * 2)
  })
})
