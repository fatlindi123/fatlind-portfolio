'use client';

import { useState } from 'react';
import styles from './style.module.scss';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="Fatlind Lubishtani, home">F<span>.</span>L</a>
      <button className={styles.menuButton} type="button" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Main navigation">
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      </nav>
      <a className={styles.availability} href="#contact"><i /> Kosovo · Open to connect</a>
    </header>
  );
}
