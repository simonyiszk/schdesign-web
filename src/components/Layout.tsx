import type { AppProps } from 'next/app';
import React, { Children } from 'react';

import Nav from './placeholder/PlaceholderNav';

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
