import React from 'react';
import '../styles/terminal.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ title, children }: Props) {
  return (
    <div className="terminal-wrapper">
      <div className="terminal-titlebar">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
