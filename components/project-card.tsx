"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const imageurl = 'https://unsplash.com/photos/a-man-standing-in-the-middle-of-a-field-g-UErVX8jb0'
const blurDataURL = '/test_image.jpeg'
export default function ProjectCard({projectName,githubUrl,projectUrl,user}:{projectName:string,githubUrl:string,projectUrl:string,user:string}) {
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>();
  const [loading, setLoading] = useState(false);

  
  const fetchScreenshot = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/screenshot', { url : projectUrl})
      const data = response.data;

      if (data) {
        setScreenshotUrl(data.screenshotUrl);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error fetching screenshot:", error);
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
   fetchScreenshot()
 }, [])

  return (
    <div className="max-w-sm w-full lg:max-w-[380px] lg:flex flex-col   bg-background border-1 border rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105" >
    <div className="relative group">
     <Link href={imageurl} target="_blank" rel="view_source_code">
     <Image
        placeholder='blur'
        blurDataURL={blurDataURL}
        src={screenshotUrl || imageurl}
        alt={`${projectName} image`}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        width={400} // Adjust the width and height based on your design
        height={400}
      />
     </Link>
    </div>
    <div className="p-6 flex flex-col justify-between leading-normal">
      <div className="mb-2">
        <p className="text-gradient text-base">@{user}</p>
        <h2 className="text-xl font-bold text-gradient mb-2 orange_gradient">
          {projectName}
        </h2>
      </div>

      <Link href={githubUrl} target="_blank" rel="view_source_code">
        <button
          type="button"
          className="font-inter cursor-pointer font-medium text-sm button"
        >
          View Source Code
        </button>
      </Link>

      
    </div>
  </div>
  )
}
