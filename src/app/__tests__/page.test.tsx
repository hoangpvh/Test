import { render, screen } from '@testing-library/react';

import Page from '../page';

describe('Page Component', () => {
  it('renders the welcome message', () => {
    render(<Page />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('Welcome to My Page');
  });

  it('renders the description text', () => {
    render(<Page />);
    const paragraphElement = screen.getByText('This is a simple Next.js page');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('applies correct classes to the main container', () => {
    const { container } = render(<Page />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('min-h-screen', 'p-4');
  });

  it('applies correct classes to the heading', () => {
    render(<Page />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveClass('text-2xl', 'font-bold', 'mb-4');
  });

  it('applies correct classes to the paragraph', () => {
    render(<Page />);
    const paragraphElement = screen.getByText('This is a simple Next.js page');
    expect(paragraphElement).toHaveClass('text-gray-600', 'mb-6');
  });
});
