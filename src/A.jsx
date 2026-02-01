// all about usestate react 
import React, { useState } from 'react'

function A() {
    // yo sadhai funct ra return bich hunchha it is
    let [glass, setGlass]=useState(1) 
    let[active, setActive]=useState(true) // on and off wala toogle type 
    let[products, setProducts]=useState({title:"p1", price:"211"}) // object banako {} bhitra 
  return (
    <div>
      <h2 className={active ? '':'hidden'}>useState hook</h2> {/* hide ra unhide garna lai use */}
      {glass}
      <button onClick={()=>setGlass(glass+1)}>+++</button>
      <button onClick={()=>setActive(!active)}>Toggle</button> {/* hide ra unhide garna lai use */}
      {products.price} {products.title}

    </div>
  )
}

export default A
