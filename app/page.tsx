import { Button } from "@/componentsui/button";
import Link from "next/link";


export default function Home() {
  return (
    <>

      <div className="flex flex-col gap-2 items-center pt-32">
        {/* Animation */}
        <div className=" rounded-md p-4 flex flex-col items-center">
         <span className="line-through border border-1 m-5 p-4"> animation here</span>
          <span className="text-gray-400">Our developer is still learning how to make animation.</span>
        </div>
        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-5 pt-4 max-w-[1000px] items-center justify-center">
          <div>
            <span className="text-left text-md lg:text-lg text-wrap">
              <span>Unleash Your Code, Share Your Craft. </span>
              <span className="text-gray-500 text-sm lg:text-lg">
                Whether you're a seasoned coder or just starting out,
                showcase your creations, inspire others, and explore the innovations of fellow developers.
              </span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2 ">
              <Button>
                Get Started
              </Button>
              <Button className="button-outline">
                <Link href={'https://nextjs.org/'}>Learn Next.js</Link>
              </Button>
            </div>

            <span className="text-sm typewriter ">
              Code, Deploy, Showcase – Repeat
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
