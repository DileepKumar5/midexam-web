import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Community from './components/Community'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Clients/>
        <Community/>
    </div>
  )
}

export default page