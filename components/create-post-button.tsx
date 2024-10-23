"use client"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { SessionProvider } from "next-auth/react"
import { useState } from "react"
import CreateCardForm from "./create-card-form"


export default function CreatePostButton() {
  const [open, setOpen] = useState(false)

  return (
    <SessionProvider>
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="button">
          <span className="lg:hidden">+</span>
          <span className="hidden lg:inline-block">Create Post</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <div className="p-4 pb-0">
            <CreateCardForm setOpen={setOpen} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
    </SessionProvider>
  )
}
