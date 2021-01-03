import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Live } from '../interfaces/LiveType';
import { LiveDataList } from '../utils/LiveData';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <strong>日本ライブカメラ🎥</strong>
      <nav>
        <span key="live">
          <Link href="/live">
            全国
          </Link>
          |
          {' '}
        </span>
        {LiveDataList.map((live: Live) => (
          <span key={live.area.pathName}>
            <Link href={`/live/${live.area.pathName}`}>
              {live.area.name}
            </Link>
            |
            {' '}
          </span>
        ))}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>※ Youtube側の都合で動画は予告なく見れなくなる可能性があります。</span>
    </footer>
  </div>
);

export default Layout;
