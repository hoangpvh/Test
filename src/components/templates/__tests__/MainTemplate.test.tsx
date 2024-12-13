import { render, screen } from '@testing-library/react'

import MainTemplate from '@/components/templates/MainTemplate'

jest.mock('@/components/organisms/header/Header', () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header Component</div>
  }
})

jest.mock('@/components/organisms/footer/Footer', () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Footer Component</div>
  }
})

describe('MainTemplate', () => {
  it('renders header and footer', () => {
    render(
      <MainTemplate>
        <div data-testid="mock-content">Content</div>
      </MainTemplate>
    )

    expect(screen.getByTestId('mock-header')).toBeInTheDocument()
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(
      <MainTemplate>
        <div data-testid="mock-content">Test Content</div>
      </MainTemplate>
    )

    expect(screen.getByTestId('mock-content')).toBeInTheDocument()
    expect(screen.getByTestId('mock-content')).toHaveTextContent('Test Content')
  })

  it('renders components in correct order', () => {
    render(
      <MainTemplate>
        <div data-testid="mock-content">Content</div>
      </MainTemplate>
    )

    const container = screen.getByTestId('main-template')
    const elements = container.children

    expect(elements[0]).toHaveAttribute('data-testid', 'mock-header')
    expect(elements[1]).toHaveAttribute('data-testid', 'mock-content')
    expect(elements[2]).toHaveAttribute('data-testid', 'mock-footer')
  })
})
