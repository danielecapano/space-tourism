"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CrewPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("crew/commander");
  }, [router]);
  return null;
}
