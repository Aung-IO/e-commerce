import AddPost from '@/componentsadd-post'
import FloatingButton from '@/componentsfloating-button'
import ProjectCard from '@/componentsproject-card'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>

     <FloatingButton/>
    </div>
  )
}
