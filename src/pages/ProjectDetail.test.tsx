import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

const renderAtSlug = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[`/projects/${slug}`]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/" element={<div>home</div>} />
      </Routes>
    </MemoryRouter>
  );

describe('ProjectDetail', () => {
  it('renders the project name', () => {
    renderAtSlug('stew');
    expect(screen.getByText(/# Stew/)).toBeInTheDocument();
  });

  it('renders the project description', () => {
    renderAtSlug('stew');
    expect(screen.getByText(/Go CLI tool for creating/)).toBeInTheDocument();
  });

  it('renders tech stack tags', () => {
    renderAtSlug('stew');
    expect(screen.getByText('Go')).toBeInTheDocument();
    expect(screen.getByText('Cobra')).toBeInTheDocument();
    expect(screen.getByText('Viper')).toBeInTheDocument();
  });

  it('renders github link when available', () => {
    renderAtSlug('stew');
    const links = screen.getAllByRole('link', { name: /github/i });
    const repoLink = links.find(l => l.getAttribute('href') === 'https://github.com/benjuh/stew');
    expect(repoLink).toBeTruthy();
  });

  it('shows private repo label when no github link', () => {
    renderAtSlug('unified');
    expect(screen.getByText(/private repo/)).toBeInTheDocument();
  });

  it('renders demo link when available', () => {
    renderAtSlug('stewordle');
    const demoLink = screen.getByRole('link', { name: /live demo/i });
    expect(demoLink).toHaveAttribute('href', 'https://www.stewdioben.com/stewordle/');
  });

  it('renders breadcrumb with project slug', () => {
    renderAtSlug('stew');
    expect(screen.getByText('stew')).toBeInTheDocument();
  });

  it('shows the ghosted cd command', () => {
    renderAtSlug('hash-cli');
    expect(screen.getByText(/cd hash-cli/)).toBeInTheDocument();
  });

  it('redirects to / for unknown slug', () => {
    renderAtSlug('does-not-exist');
    expect(screen.getByText('home')).toBeInTheDocument();
  });

  it('renders back navigation link', () => {
    renderAtSlug('stew');
    const backLink = screen.getByRole('link', { name: /cd \.\./ });
    expect(backLink).toHaveAttribute('href', '/');
  });
});
