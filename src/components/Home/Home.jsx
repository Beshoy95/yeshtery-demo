import React from 'react'
import "../../Styles/Home/Home.css"
import { SimilarProducts, MainProducts } from './../index';

function Home({ data, handleIncrement, handleDecrement ,totalQuantity}) {

  return (
    <div className='home'>
      <MainProducts data={data.products} handleIncrement={handleIncrement} handleDecrement={handleDecrement}  totalQuantity={totalQuantity}/>
      <SimilarProducts data={data.similarProducts} />
    </div>
  )
}

export default Home