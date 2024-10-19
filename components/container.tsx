import React from 'react'

export default function Container({children} : React.PropsWithChildren) {
  return (
    <div className='px-5 lg:px-16 pt-4'>{children}</div>
  )
}
