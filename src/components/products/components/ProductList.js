import React from 'react'
import Product from './Product'

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    rating: 4,
    numOfReviews: 10,
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
    rating: 4,
    numOfReviews: 10,
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
    rating: 4,
    numOfReviews: 10,
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
    rating: 4,
    numOfReviews: 10,
  },
  // More products...
]
const ProductList = () => {
  return (
    <div>
        <h1>Lateset products</h1>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7'>
          {products.map((prod) => (
            <Product
              key={prod.id}
              name={prod.name}
              imageSrc={prod.imageSrc}
              imageAlt={prod.imageAlt}
              price={prod.price}
              rating={prod.rating}
              reviews={prod.numOfReviews}
            />
          ))}
        </div>
    </div>
  )
}

export default ProductList
