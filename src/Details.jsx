import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Data';

function Details() {
    let {id}=useParams();
    let find=products.find((a)=>a.id==id);
  return (
    <div>
      details of {find.title}
      <img src="{find.image}" alt="" />
    </div>
  )
}

export default Details
