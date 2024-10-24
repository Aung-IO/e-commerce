"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useScreenshot } from '../hooks/fetchScreenshot';
import RepoButton from './repo-button';

export default function SingleCard({ projectName, githubUrl, projectUrl, username, userprofile }: ProjectCardProps) {

  const screenshot = useScreenshot(projectUrl)

  return (
    <div className="max-w-sm w-full lg:max-w-[380px] lg:flex flex-col" >

      <Link href={projectUrl} target="_blank" rel="view_source_code">
        <Image
          src={screenshot || ''}
          alt={`${projectName} image`}
          className="w-full h-auto"
          width={300}
          height={300}
        />
      </Link>

      <div className="flex m-3 justify-between items-center">
        <div className='flex items-center gap-2'>
          <Image src={userprofile} alt={`${username} image`} className="rounded-full" width={25} height={25} />
          <p className="text-gradient font-bold">{username}</p>
        </div>

        <Link href={githubUrl} target="_blank" rel="view_source_code">
          <RepoButton />
        </Link>
      </div>
    </div>
  )
}
