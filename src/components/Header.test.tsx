import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the full name', () => {
    render(<Header />);
    expect(screen.getByText('Benjamin')).toBeInTheDocument();
    expect(screen.getByText('Stewart')).toBeInTheDocument();
  });

  it('shows base breadcrumb without prop', () => {
    render(<Header />);
    expect(screen.getByText(/→ projects/)).toBeInTheDocument();
  });

  it('shows slug segment when breadcrumb prop provided', () => {
    render(<Header breadcrumb="stew" />);
    expect(screen.getByText('stew')).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<Header />);
    const ghLink = screen.getByRole('link', { name: /github/i });
    expect(ghLink).toHaveAttribute('href', 'https://github.com/benjuh');
  });

  it('renders LinkedIn link', () => {
    render(<Header />);
    const liLink = screen.getByRole('link', { name: /linkedin/i });
    expect(liLink).toHaveAttribute('href', 'https://www.linkedin.com/in/benjuhminstewart/');
  });
});
