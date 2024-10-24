
import { auth, signIn } from "@/auth";
import Image from "next/image";

export default async function SignIn() {
    const session = await auth()
    if (session?.user) console.log(session);

    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            {session?.user ? (
                <div className="flex items-center ">
                    <Image src={session?.user?.image ?? ""} alt="profile" 
                    width={30} height={30} className="rounded-full mr-4" />

                </div>
            ) : (
                <button type="submit" className="button">Sign In</button>
            )}

        </form>
    )
} 