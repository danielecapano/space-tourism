"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Technology() {
  const router = useRouter();

  useEffect(() => {
    router.push("technology/launch-vehicle");
  }, [router]);
  return null;
}
