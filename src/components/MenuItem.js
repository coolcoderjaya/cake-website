// simple component that will accept props and render UI based on those props
import React from 'react'

function MenuItem({image,name,price}) {//it's accepting props.we have a function"menuList", and call this func many times by passing differnt arguments. so we're rendering menuItem many times but we're passing different values for the props
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>₹{price}</p>
    </div>
  )
}

export default MenuItem