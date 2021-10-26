import React from 'react'

import sizeChart from '../../assets/imgs/Size_Chart.jpg'

const SizeChart = () => {
  return (
    <div className='max-w-3xl text-lg mx-auto'>
      <h2 className='text-center text-4xl font-medium pb-4'>Size Charts</h2>
      <span className='block mx-auto h-0.5 bg-black w-7 mb-8'></span>
      <img src={sizeChart} alt='size-chart' />
    </div>
  )
}

export default SizeChart
