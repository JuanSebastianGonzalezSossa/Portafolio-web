import React from 'react'
import { About } from './Componentes/About'
import { MainBanner } from './Componentes/MainBanner'
import { Navbar } from './Componentes/Navbar'

export const App = () => {

  return (
    <>
      <Navbar/>
      <MainBanner/>
      <About/> 
    </>
  )
}
