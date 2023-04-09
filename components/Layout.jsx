import React from 'react';
import { Navbar, Footer, Login } from '.';

import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const Layout = ({ children }) => {
  return (
    <div className={inter.className}> 
        <Head>
            <title>BloqSecure</title>
        </Head>
        <header>
            <Navbar />
        </header>
        <main className='Container'>
            {children}
        </main>
        <footer>
        <Footer />
        </footer>
    </div>
  )
}

export default Layout