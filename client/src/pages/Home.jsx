import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import { Slider } from '../components/Slider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Slider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Home