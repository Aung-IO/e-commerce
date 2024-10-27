import ProfileLayout from '@/componentslayout/profile-layout'
import CheckUserProfile from '../components/check-user-profile'
import { SignOut } from '@/componentscommon/sign-out'

export default function UserProfile() {
  return (
 
    <ProfileLayout>
      <SignOut/>
      <CheckUserProfile/>
    </ProfileLayout>
  
  )
}
 