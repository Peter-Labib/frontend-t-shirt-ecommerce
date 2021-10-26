import React, { useState, useEffect, memo } from 'react'

import Slider from 'react-slick'
import './carousel.css'

const Carousel = ({ children, extraSetting }) => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  })

  useEffect(() => {
    if (!!extraSetting) {
      setSettings((settings) => ({ ...settings, ...extraSetting }))
    }
  }, [extraSetting])

  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
