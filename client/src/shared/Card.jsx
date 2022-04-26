import React from 'react'

export default function Card({children, section}) {
  if(section){
    return (
      <div className={`card-${section}`}>
          {children}
      </div>
    )
  } else {
    return (
      <div className='card'>
          {children}
      </div>)
  }
}
