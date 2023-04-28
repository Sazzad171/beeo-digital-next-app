// tailwind css
import './globals.css';

// import font
import { Volkhov, Poppins } from 'next/font/google';

// volkhov font
const volkhov = Volkhov({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-volkhov'
});

// poppins font
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

// head meta
export const metadata = {
  title: 'Beeo Digital',
  description: 'Top Class Software Development Company',
}

// import components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${volkhov.variable} font-poppins`}>
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
