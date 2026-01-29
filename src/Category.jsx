import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { products } from './Data';


function Category() {
    let {cname}=useParams();
    let filter=products.filter((a)=>a.category==cname);
  return (
    <div className='container mx-auto'>
      <h3>category{cname}</h3>
         <div className='grid grid-cols-3 container mx-auto'>
            {filter.map(a=><div className='border'>
              <Link to={`/details/${a.id}`}>
              {a.title}<img src={a.image}/>
              </Link>
              </div>)}
            </div>
    </div>
  )
}

export default Category
