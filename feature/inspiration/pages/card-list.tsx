
import CardLayout from '@/components/layout/card-layout'
import SingleCard from '../components/single-card'
import { fetchCardData } from '../hooks/fetchCardData'

export default async function CardList() {
    const data = await fetchCardData()
    return (
        <CardLayout >
            {data.map((card) => (
                <div key={card.id} >
                    <SingleCard
                        projectName={card.projectName}
                        githubUrl={card.githubUrl}
                        projectUrl={card.projectUrl}
                        username={card.user!.name!}
                        userprofile={card.user!.image!}

                    />
                </div>
            ))}
        </CardLayout>

    )
}