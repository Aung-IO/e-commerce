import React from 'react'

export default function Container({children} : React.PropsWithChildren) {
  return (
    <div className='px-10 pt-4'>{children}</div>
  )
}
