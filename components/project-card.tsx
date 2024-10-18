import Image from 'next/image'
import Link from 'next/link'

const imageurl = 'https://unsplash.com/photos/a-man-standing-in-the-middle-of-a-field-g-UErVX8jb0'
const screenshotUrl = '/test_image.jpeg'
const projectName = 'Project Name'
const sourceCodeUrl = 'https://github.com/yourusername/your-project'
const username = 'Your Username'


export default function ProjectCard() {
  return (
    <div className="max-w-sm w-full lg:max-w-[380px] lg:flex flex-col  bg-slate-50 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
    <div className="relative group">
     <Link href={imageurl} target="_blank" rel="view_source_code">
     <Image
       src={screenshotUrl}
        alt={`${projectName} image`}
        className="h-48 w-full lg:w-full object-cover transition-transform duration-300 group-hover:scale-110"
        width={100} // Adjust the width and height based on your design
        height={200}
      />
     </Link>
    </div>
    <div className="p-6 flex flex-col justify-between leading-normal">
      <div className="mb-2">
        <p className="text-gray-700 text-base">@{username}</p>
        <h2 className="text-xl font-bold text-gray-900 mb-2 orange_gradient">
          {projectName}
        </h2>
      </div>

      <Link href={sourceCodeUrl} target="_blank" rel="view_source_code">
        <button
          type="button"
          className="font-inter cursor-pointer font-medium text-sm blue_gradient"
        >
          View Source Code
        </button>
      </Link>

      
    </div>
  </div>
  )
}
