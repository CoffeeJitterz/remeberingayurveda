import React from 'react'

export default function Card({children, section}) {
  return (
    <div className={`card-${section}`}>
        {children}
    </div>
  )
}
