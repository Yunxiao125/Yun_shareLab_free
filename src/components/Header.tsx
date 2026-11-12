// src/components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于我' },
    { href: '/quiz', label: '自测' },
  ];

  return (
    <header className="bg-primary text-white sticky top-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0 text-2xl font-bold">Self‑Aware</div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary text-white px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block px-3 py-2 rounded-md hover:bg-secondary">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
