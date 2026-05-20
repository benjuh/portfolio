import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectList from './ProjectList';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('ProjectList', () => {
  it('renders all project folder rows', () => {
    renderWithRouter(<ProjectList />);
    expect(screen.getByText('stall-stars')).toBeInTheDocument();
    expect(screen.getByText('unified')).toBeInTheDocument();
    expect(screen.getByText('speakeasy')).toBeInTheDocument();
    expect(screen.getByText('hash-cli')).toBeInTheDocument();
    expect(screen.getByText('stewordle')).toBeInTheDocument();
    expect(screen.getByText('stew')).toBeInTheDocument();
    expect(screen.getByText('griddy')).toBeInTheDocument();
  });

  it('each project links to /projects/:slug', () => {
    renderWithRouter(<ProjectList />);
    const unifiedLink = screen.getByRole('link', { name: /unified/ });
    expect(unifiedLink).toHaveAttribute('href', '/projects/unified');
    const stewLink = screen.getByRole('link', { name: 'stew' });
    expect(stewLink).toHaveAttribute('href', '/projects/stew');
  });

  it('shows the ls command in the terminal', () => {
    renderWithRouter(<ProjectList />);
    expect(screen.getByText(/ls/, { selector: '.prompt-cmd' })).toBeInTheDocument();
  });

  it('renders GitHub and LinkedIn links', () => {
    renderWithRouter(<ProjectList />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });
});
