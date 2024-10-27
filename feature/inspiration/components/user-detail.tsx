import { auth } from "@/auth"
import CardLayout from "@/componentslayout/card-layout"
import SingleCard from "@/feature/inspiration/components/single-card"
import { fetchUserWithCard } from "../hooks/fetch-user-with-card"



export default async function UserDetail() {
  const session = await auth()
  const userId: string = session?.user?.id!

  const {cards, username, profileImage} = await fetchUserWithCard(userId)
  
  return (
    <CardLayout>
    {cards.map((card) => (
      <SingleCard
        key={card.id}
        projectName={card.projectName}
        githubUrl={card.githubUrl}
        projectUrl={card.projectUrl}
        username={username!}  
        userprofile={profileImage!} 
        ownerId={card.userId}
        cardId={card.id}
      />
    ))}
  </CardLayout>
  )
}
