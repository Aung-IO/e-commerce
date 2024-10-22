"use client"

import * as React from "react"


import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
 
} from "@/components/ui/drawer"
import AddForm from "./add-form"



export default function AddPost() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="button">
          <span className="lg:hidden">+</span>
          <span className="hidden lg:inline-block">Create Post</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
        
          <div className="p-4 pb-0">
           <AddForm/>
            {/*  */}
          </div>
         
        </div>
      </DrawerContent>
    </Drawer>
  )
}
