import { prisma } from '@/db'
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
        <div>
            {data.map((card) => (
                <div key={card.id} >
                   <ProjectCard
                   projectName={card.projectName}
                   githubUrl={card.githubUrl}
                   projectUrl={card}
                   user={card.user.name}
                   
                   />
                </div>
            ))}
        </div>
    )
}
