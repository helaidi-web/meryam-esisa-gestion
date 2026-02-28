import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ESISA - Portail de Gestion Académique',
  description: 'Application de gestion de produits - MH Magnifique et Premium',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
