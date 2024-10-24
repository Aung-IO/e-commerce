import { Button } from '@/components/ui/button';
import GithubLight from "@/public/icons/github-mark-white.svg";
import GithubDark from "@/public/icons/github-mark.svg";
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function RepoButton() {
    const { resolvedTheme } = useTheme(); 
    return (
        <Button className='button'>
          <Image
            src={
              resolvedTheme === "dark" || !resolvedTheme
                ?  GithubDark
                :  GithubLight
            }
            alt="github-icon"
            width={20}
            height={20}
          />
            Repo?
        </Button>
    )
}
