"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useCheckUserSession() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);
  return session;
}
