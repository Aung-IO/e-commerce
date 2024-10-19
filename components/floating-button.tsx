import React from 'react'
import { Button } from './ui/button'
import AddPost from './add-post'

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 lg:hidden">
      <AddPost/>
    </div>
  )
}
