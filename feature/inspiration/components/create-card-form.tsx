"use client"

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";

type Inputs = {
  projectName: string
  projectUrl: string
  githubUrl: string
}


export default function CreateCardForm({setOpen} : {setOpen: (value: boolean) => void}) {
  const { data: session } = useSession()
  const userId = session?.user?.id
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting,   },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
        await axios.post("/api/card", {
        projectName: data.projectName,
        projectUrl: data.projectUrl,
        githubUrl: data.githubUrl,
        userId: userId,
      });

    } catch (error) {
      console.log("Error creating card:", error);

    }
    setOpen(false)
    router.refresh()
  };


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-5">

      {/* include validation with required or other standard HTML validation rules */}
      <label>Project Name</label>
      <input className="border border-1" {...register("projectName", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.projectName && <span>This field is required</span>}

      <label>Add Project URl</label>
      <input className="border border-1" {...register("projectUrl", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.projectUrl && <span>This field is required</span>}

      <label>Add Github Link</label>
      <input className="border border-1" {...register("githubUrl", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.githubUrl && <span>This field is required</span>}



      <Button type="submit" >{isSubmitting ? "Creating" : "Create"}</Button>
    </form>
  )
}