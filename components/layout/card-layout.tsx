import React from 'react'

export default function CardLayout({children} : {children : React.ReactNode}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3'>
     
      {children}
      </div>
  )
}
