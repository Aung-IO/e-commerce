import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import CreateCardForm from "./create-card-form"
import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"


export default async function CreatePostButton() {
  const session = await auth()

  return (
    <SessionProvider>
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
            <CreateCardForm/>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
    </SessionProvider>
  )
}
