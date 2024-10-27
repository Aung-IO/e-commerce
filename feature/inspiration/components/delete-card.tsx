"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function DeleteButton({ cardId }: { cardId: string }) {
  const { toast } = useToast()
  const router = useRouter()
  const handleDelete = async (cardId: any) => {

    try {
      const response = await fetch('/api/card', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId }),
      });

      if (response.ok) {
        router.refresh()
      } else {
        const errorMessage = await response.json();
        alert(errorMessage.error || "Error deleting card");
      }
    } catch (error) {
      console.error("Failed to delete card:", error);
      alert("Failed to delete card");
    }


  };

  return (
    <Button variant="outline" onClick={() => {
      handleDelete(cardId)
      toast({
        title: "Card deleted successfully",
        description: "Your card will disappear from your feed",
      })
    }}>
      <Image src={"/images/delete.png"} alt="delete" width={20} height={20} />
    </Button>
  )
}
