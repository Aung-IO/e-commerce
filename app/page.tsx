import { Button } from "@/componentsui/button";


export default function Home() {
  return (
    <>
     
      <div className="flex flex-col gap-2 items-center pt-32">
        <div className="border border-1 rounded-md p-4">
          animation here
        </div>
        <div className="flex gap-2 px-10 pt-4 max-w-[800px] items-center">
          <span>
            The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.
          </span>
          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
