import React from 'react';

const links = [
  {
    href: 'https://tailwindcss.com/docs/utility-first',
    label: 'Tailwind Docs',
  },
  { href: 'https://nextjs.org/docs', label: 'Next.js Docs' },
];

export default function Nav(): JSX.Element {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <a className="text-blue-500 no-underline">Home</a>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
