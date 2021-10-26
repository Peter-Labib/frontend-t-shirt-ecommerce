import React from 'react'

import Carousel from './UI/Carousel/Carousel'
import Button from './UI/Button'

import newArrivalLarge from '../assets/imgs/new-arriavl-large.jpg'
import newArrivalTablet from '../assets/imgs/new-arriavl-tablet.jpg'
import newArrivalMob from '../assets/imgs/new-arriavl-mobile.jpg'
import menArrivalLarge from '../assets/imgs/men-arrival-large.jpg'
import menArrivalTablet from '../assets/imgs/men-arrival-tablet.jpg'
import menArrivalMob from '../assets/imgs/men-arrival-mobile.jpg'
import womenArrivalLarge from '../assets/imgs/winter-women-large.jpg'
import womenArrivalTablet from '../assets/imgs/winter-women-tablet.jpg'
import womenArrivalMob from '../assets/imgs/winter-women-mobile.jpg'

const slides = [
  {
    largeImage: newArrivalLarge,
    tabImage: newArrivalTablet,
    mobImage: newArrivalMob,
    alt: 'new-arrival',
    button: 'Men & Women',
  },
  {
    largeImage: menArrivalLarge,
    tabImage: menArrivalTablet,
    mobImage: menArrivalMob,
    alt: 'new-men-arrival',
    button: 'Get IN Now',
  },
  {
    largeImage: womenArrivalLarge,
    tabImage: womenArrivalTablet,
    mobImage: womenArrivalMob,
    alt: 'new-women-arrival',
    button: 'Get IN Now',
  },
]

const HeadCarousel = () => {
  const onClick = (path) => {}

  return (
    <Carousel
      extraSetting={{
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
      }}
    >
      {slides.map(({ largeImage, tabImage, mobImage, alt, button }) => (
        <div key={alt} className='h-screen w-full overflow-hidden relative'>
          <picture>
            <source srcSet={largeImage} media='(min-width: 1024px)' />
            <source srcSet={tabImage} media='(min-width: 640px)' />
            <source srcSet={mobImage} />
            <img src={tabImage} alt={alt} className='w-full object-cover' />
          </picture>
          <div className='inset-0 bg-black bg-opacity-10 z-10 absolute grid place-items-center text-center'>
            <div className='flex flex-col text-white'>
              {alt === 'new-men-arrival' && (
                <>
                  <p className=' pb-4'>MEN</p>
                  <p className='text-4xl pb-6'>hot & new</p>
                  <p className='text-2xl pb-5'>new drops</p>
                </>
              )}
              <Button onclick={onClick}>Get It Now</Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default HeadCarousel
