import { render, screen } from '@testing-library/react'

import OtherProductContent from '@/components/atoms/OtherProductContent'

describe('OtherProductContent', () => {
  beforeEach(() => {
    render(<OtherProductContent />)
  })

  it('renders with correct container styling', () => {
    const container = screen.getByTestId('other-product-content')
    expect(container).toHaveClass(
      'absolute',
      'top-70',
      'w-304',
      'xl:h-280',
      'h-280',
      'sm:h-240',
      'bg-white',
      'rounded-2xl',
      'flex'
    )
  })

  it('renders left column dots with correct styling', () => {
    const dotsContainer = screen.getByTestId('dots-column')
    expect(dotsContainer).toHaveClass(
      'flex',
      'flex-col',
      'gap-3',
      'pl-21',
      'pt-21'
    )

    // Get all dots
    const dots = screen.getAllByTestId('dot')
    expect(dots).toHaveLength(9)

    // Check specific dots with unique colors
    expect(dots[0]).toHaveClass('bg-lime-500')
    expect(dots[3]).toHaveClass('bg-Product-primary')
    expect(dots[6]).toHaveClass('bg-Product-secondary')

    // Check neutral dots
    ;[1, 2, 4, 5, 7, 8].forEach((index) => {
      expect(dots[index]).toHaveClass('bg-neutral-background')
    })

    // Check common styling for all dots
    dots.forEach((dot) => {
      expect(dot).toHaveClass('w-3', 'h-3', 'rounded-10')
    })
  })

  it('renders right bars with correct styling', () => {
    const barsContainer = screen.getByTestId('bars-column')
    expect(barsContainer).toHaveClass(
      'flex',
      'flex-col',
      'gap-3',
      'pl-4.5',
      'pt-21'
    )

    // Get all bars
    const bars = screen.getAllByTestId('bar')
    expect(bars).toHaveLength(9)

    // Check specific bars with unique colors
    expect(bars[0]).toHaveClass('bg-lime-500')
    expect(bars[3]).toHaveClass('bg-Product-primary')
    expect(bars[6]).toHaveClass('bg-Product-secondary')

    // Check neutral bars
    ;[1, 2, 4, 5, 7, 8].forEach((index) => {
      expect(bars[index]).toHaveClass('bg-neutral-background')
    })

    // Check common styling for all bars
    bars.forEach((bar) => {
      expect(bar).toHaveClass('w-169', 'h-3', 'rounded-10')
    })
  })
})
