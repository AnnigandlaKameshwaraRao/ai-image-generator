import React from 'react'
import Header from './header'
import Footer from './footer'
import Form from './form'
import './container.css'

const Container = () => {
  return (
    <>
        <div className="container">

            <Header></Header>
            <Form></Form>
            <Footer></Footer>

        </div>
    </>
  )
}

export default Container