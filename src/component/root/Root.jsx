import React from 'react'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Root