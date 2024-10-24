import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Image from 'next/image';


export default function RepoButton() {
    const { resolvedTheme } = useTheme(); 
    return (
        <Button className='button'>
          <Image
            src={
              resolvedTheme === "dark" || !resolvedTheme
                ?  "/github-mark.svg"
                :  "/github-mark-white.svg"
            }
            alt="github-icon"
            width={20}
            height={20}
          />
            Repo?
        </Button>
    )
}
