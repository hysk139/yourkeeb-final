import React from 'react'
import { Helmet } from 'react-helmet';
import { HomeHeroComponent,HomeBody } from '../../components'

const Home = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ahmad Fakhri</title>
      </Helmet>
      <HomeHeroComponent />
      <HomeBody />
    </>
  )
}

export default Home;