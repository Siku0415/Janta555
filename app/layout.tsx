import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles
import MetaPixel from '@/components/MetaPixel';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Janta555 - Result Website Safely | Trusted Matka Application',
  description: 'Real-time results, secure payments & instant payouts. Download the Janta555 app now!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-neutral-50 text-neutral-800 font-body antialiased" suppressHydrationWarning>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
