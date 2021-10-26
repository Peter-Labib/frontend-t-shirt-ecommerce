import React from 'react'
import { Link } from 'react-router-dom'

import Carousel from '../UI/Carousel/Carousel'
import HeadCarousel from '../HeadCarousel'

import womenCoatsAndJackets from '../../assets/imgs/women-coats-and-jackets.jpg'
import menCoatsAndJackets from '../../assets/imgs/men-coats-and-jackets.jpg'
import womenSweatshirtsAndHoodies from '../../assets/imgs/women-sweatshirts-and-hoodies.jpg'
import menSweatshirtsAndHoodies from '../../assets/imgs/men-sweatshirts-and-hoodies.jpg'
import cairokeeLarge from '../../assets/imgs/caiokee-large.jpg'
import cairokeeTablet from '../../assets/imgs/caiokee-tablet.jpg'
import cairokeeMobile from '../../assets/imgs/caiokee-mobile.jpg'

const favCatogeries = [
  {
    image: womenCoatsAndJackets,
    alt: 'women-coats-and-jackets',
    caption: 'Women Coats And Jackets',
  },
  {
    image: menCoatsAndJackets,
    alt: 'men-coats-and-jackets',
    caption: 'Men Coats And Jackets',
  },
  {
    image: womenSweatshirtsAndHoodies,
    alt: 'women-sweatshirts-and-hoodies',
    caption: 'Women Sweatshirts And Hoodies',
  },
  {
    image: menSweatshirtsAndHoodies,
    alt: 'men-sweatshirts-and-hoodies',
    caption: 'Men Sweatshirts And Hoodies',
  },
]

const Home = () => {
  return (
    <React.Fragment>
      <HeadCarousel />
      <section className='py-8 px-4'>
        <h2 className='lg:p-6 text-3xl p-4'>Things We Love</h2>
        <Carousel extraSetting={{ variableWidth: true, infinite: false }}>
          {favCatogeries.map(({ image, alt, caption }) => (
            <Link to=''>
              <div key={alt} className='lg:p-6 text-center text-xl'>
                <img src={image} alt={alt} />
                <p>{caption}</p>
              </div>
            </Link>
          ))}
        </Carousel>
      </section>
      <section>
        <div>
          <picture>
            <source srcSet={cairokeeLarge} media='(min-width: 1024px)' />
            <source srcSet={cairokeeTablet} media='(min-width: 640px)' />
            <source srcSet={cairokeeMobile}  />
            <img srcSet={cairokeeMobile} alt='cairokee' className='w-full object-cover' />
          </picture>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
