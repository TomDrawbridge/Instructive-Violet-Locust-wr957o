import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Instructive Violet Locust</title>
        <meta property="og:title" content="Instructive Violet Locust" />
      </Helmet>
    </div>
  )
}

export default Home
