import { prisma } from "@/db";

export async function fetchUserWithCard(userId : string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      cards: true,
      
    },
    
  });

  return {
    username: user?.name || null,
    profileImage: user?.image || null,
    cards: user?.cards || [],
  }; 

}