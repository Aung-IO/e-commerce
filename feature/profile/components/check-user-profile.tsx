import { auth } from "@/auth";
import { redirect } from 'next/navigation';
import UserDetail from "../../inspiration/components/user-detail";


export default async function CheckUserProfile() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <UserDetail />
   
  );
};



