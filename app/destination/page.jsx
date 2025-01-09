"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Destination() {
  const router = useRouter();

  useEffect(() => {
    router.push("destination/moon");
  }, [router]);
  return null;
}
