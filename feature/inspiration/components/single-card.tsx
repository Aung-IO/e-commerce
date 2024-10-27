"use client"
import DummyImage from '@/public/images/dummyImage.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useScreenshot } from '../hooks/fetchScreenshot';
import DeleteButton from './delete-card';
import RepoButton from './repo-button';

interface SingleCardProps {
  projectName: string;
  projectUrl: string;
  githubUrl: string;
  userprofile: string;
  username: string;
  cardId: string;
  ownerId: string; // User ID of the card owner
  loggedInUserId: string; // User ID of the logged-in user


}


export default function SingleCard({ projectName,
  projectUrl,
  githubUrl,
  userprofile,
  username,
  cardId,
  loggedInUserId,
  ownerId

}: SingleCardProps) {



  const screenshot = useScreenshot(projectUrl)



  return (
    <div className="max-w-sm w-full lg:max-w-[380px] lg:flex flex-col" >

      <div className="relative max-w-[450px] max-h-[300px]">
        <Link href={projectUrl} target="_blank" rel="view_source_code">
          <Image
            src={screenshot || DummyImage}
            alt={`${projectName} image`}
            className="w-full h-full object-cover" // Ensures both images cover the container equally
            width={450}
            height={300}
            placeholder="blur" // Optional: show a blur while loading
            blurDataURL={screenshot || "null"} // Optional: display DummyImage as the blur placeholder
          />
        </Link>
      </div>

      <div className="flex m-3 justify-between items-center">
        <div className='flex items-center gap-2'>
          <Image src={userprofile} alt={`${username} image`} className="rounded-full" width={25} height={25} />
          <p className="text-gradient font-bold">{username}</p>
        </div>

        <div className='flex gap-2'>
          <Link href={githubUrl} target="_blank" rel="view_source_code">
            <RepoButton />
          </Link>


          {loggedInUserId === ownerId ? <DeleteButton cardId={cardId} /> : ""}


        </div>

      </div>
    </div>
  )
}
