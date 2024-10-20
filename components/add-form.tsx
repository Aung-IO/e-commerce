import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "./ui/button"


type Inputs = {
    projectName: string
    projectUrl: string
    githubLink: string
}


export default function AddForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    

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
            <input className="border border-1" {...register("githubLink", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.githubLink && <span>This field is required</span>}



            <Button type="submit" >Create</Button>
        </form>
    )
}