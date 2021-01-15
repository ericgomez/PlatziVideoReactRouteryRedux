import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/Home.scss'

const API = 'http://localhost:3000/initalState/'

const Home = () => {
  const initialState = useInitialState(API)
  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className='Home'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && ( //Creamos una validación mylist que los registros sean mayor a 0
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.mylist.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {initialState.trends.length > 0 && ( //Creamos una validación trends que los registros sean mayor a 0
        <Categories title='Tendencias'>
          <Carousel>
            {initialState.trends.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {initialState.originals.length > 0 && ( //Creamos una validación originals que los registros sean mayor a 0
        <Categories title='Originales de PlatziVideo'>
          <Carousel>
            <Carousel>
              {initialState.originals.map(item => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Carousel>
        </Categories>
      )}

      <Footer />
    </div>
  )
}

export default Home
