import Link from 'next/link';
import React from 'react';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav(): JSX.Element {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/" passHref>
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
