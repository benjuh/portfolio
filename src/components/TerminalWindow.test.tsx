import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TerminalWindow from './TerminalWindow';

describe('TerminalWindow', () => {
  it('renders the title in the title bar', () => {
    render(<TerminalWindow title="~ — zsh"><p>content</p></TerminalWindow>);
    expect(screen.getByText('~ — zsh')).toBeInTheDocument();
  });

  it('renders children inside the body', () => {
    render(<TerminalWindow title="test"><p>hello world</p></TerminalWindow>);
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });

  it('renders three traffic light dots', () => {
    const { container } = render(<TerminalWindow title="test"><span /></TerminalWindow>);
    const dots = container.querySelectorAll('.terminal-dot');
    expect(dots).toHaveLength(3);
  });
});
