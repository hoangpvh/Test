import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { solutions } from '@/assets/data'
import SolutionSection from '@/components/organisms/solutions/SolutionSection'

describe('SolutionSection', () => {
  it('renders heading texts correctly', () => {
    render(<SolutionSection />)
    expect(screen.getByText('How can we help you?')).toBeInTheDocument()
    expect(screen.getByText('solutions we provide')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Transforming Ideas into High-Performance Software – Tailored to Drive Your Success.'
      )
    ).toBeInTheDocument()
  })

  it('renders all solution cards', () => {
    render(<SolutionSection />)

    solutions.forEach((solution) => {
      expect(screen.getByText(solution.title)).toBeInTheDocument()
      expect(screen.getByText(solution.description)).toBeInTheDocument()
    })
  })

  it('renders view more button', async () => {
    const user = userEvent.setup()
    render(<SolutionSection />)

    const button = screen.getByText('View More')
    expect(button).toBeInTheDocument()

    await user.click(button)
  })

  it('applies correct styling classes', () => {
    const { container } = render(<SolutionSection />)
    const mainDiv = container.firstChild

    expect(mainDiv).toHaveClass(
      'w-full h-auto px-4 py-10 bg-secondary-dark justify-start'
    )
  })
})
