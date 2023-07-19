import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
         <h2 className='heading'> Welcome to Our Store</h2>
          
           <section>
                <h3> our Products</h3>
                  <Product/>
           </section>

    </div>
  )
}

export default Home