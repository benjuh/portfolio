import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const renderHeader = (props?: { breadcrumb?: string }) =>
  render(
    <MemoryRouter>
      <Header {...props} />
    </MemoryRouter>
  );

describe('Header', () => {
  it('renders the full name', () => {
    renderHeader();
    expect(screen.getByText('Benjamin')).toBeInTheDocument();
    expect(screen.getByText('Stewart')).toBeInTheDocument();
  });

  it('shows base breadcrumb without prop', () => {
    renderHeader();
    expect(screen.getByText(/→ projects/)).toBeInTheDocument();
  });

  it('shows slug segment when breadcrumb prop provided', () => {
    renderHeader({ breadcrumb: 'stew' });
    expect(screen.getByText('stew')).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    renderHeader();
    const ghLink = screen.getByRole('link', { name: /github/i });
    expect(ghLink).toHaveAttribute('href', 'https://github.com/benjuh');
  });

  it('renders LinkedIn link', () => {
    renderHeader();
    const liLink = screen.getByRole('link', { name: /linkedin/i });
    expect(liLink).toHaveAttribute('href', 'https://www.linkedin.com/in/benjuhminstewart/');
  });
});
