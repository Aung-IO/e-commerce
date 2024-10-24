import { prisma } from '@/db'

export async  function fetchCardData() {
    const data = await prisma.card.findMany({
        include: {
            user: {
                select: {
                    name: true,
                    image: true,
                }
            }
        }
    })

    return data
}
