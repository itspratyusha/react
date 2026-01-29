import React from 'react'
import { products } from './Data'
function Home() {
  return (
    <>
    <div className='grid grid-cols-3 container mx-auto'>
      {products.map(a=><div className='border'>{a.title}<img src={a.image}/></div>)}
      </div>
    </>
  )
}

export default Home
