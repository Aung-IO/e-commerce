import { prisma } from '@/db'
import CardLayout from './card-layout'
import ProjectCard from './project-card'

export default async function CardList() {
    const data = await prisma.card.findMany({
        include: {
            user: {
                select: {
                    name: true
                }
            }
        }
    })
    return (
        <CardLayout >
            {data.map((card) => (
                <div key={card.id} >
                   <ProjectCard
                   projectName={card.projectName}
                   githubUrl={card.githubUrl}
                   projectUrl={card.projectUrl}
                   user={card.user!.name!}
                   
                   />
                </div>
            ))}
        </CardLayout>
    )
}
