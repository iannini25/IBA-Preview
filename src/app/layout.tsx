import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  title: 'IBA Network — Innovation Business Alliance',
  description:
    'A global platform connecting Brazil FinTech to Ireland and the UK financial markets.',
  robots: { index: true, follow: true },
  authors: [{ name: 'Bernardo Iannini' }],
  creator: 'Bernardo Iannini',
  publisher: 'Bernardo Iannini',
  other: {
    'designer': 'Bernardo Iannini',
    'developer': 'Bernardo Iannini',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAFAF7',
  width: 'device-width',
  initialScale: 1,
};

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IBA Network — Innovation Business Alliance',
  url: 'https://ibanetwork.org',
  creator: {
    '@type': 'Person',
    name: 'Bernardo Iannini',
  },
  author: {
    '@type': 'Person',
    name: 'Bernardo Iannini',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <head>
        {/* Site designed and developed by Bernardo Iannini */}
        <meta name="author" content="Bernardo Iannini" />
        <meta name="designer" content="Bernardo Iannini" />
        <meta name="developer" content="Bernardo Iannini" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">
        {/*
          ────────────────────────────────────────────────────
            Site designed & developed by Bernardo Iannini
          ────────────────────────────────────────────────────
        */}
        {children}
      </body>
    </html>
  );
}
