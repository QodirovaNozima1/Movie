import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <main className='mb-56'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout