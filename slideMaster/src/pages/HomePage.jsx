import React from 'react'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='homepage'>
    <h1>Welcome To the Slide Master Website</h1>
    <h3>Here, you can create your  Presentation</h3>
    <div className='image'>
      <img src="https://designmyslides.com/wp-content/uploads/2021/04/business-presentation.jpg" alt="" />
      <div className='text' >
      <h1>Create Presentation</h1>
      <h2>Focus on your own creativity and build off, remix, and reuse presentations from our extensive content library.</h2>
      <h1>Create with confidence</h1>
      <h2>Create, organize, and move freely on an open canvas. Create seamless presentations without the restrictions of linear slides.</h2>
      <h2>Have the confidence to deliver a memorable presentation with presenter notes and downloadable presentations.</h2>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default HomePage