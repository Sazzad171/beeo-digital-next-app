import React from 'react';

// components
import Header from './Header';
import Footer from './Footer';

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

const Layout = ({children}) => {
  return (
    <>
      <Header />
        <main className={`${poppins.variable} ${volkhov.variable} font-poppins`}>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout;