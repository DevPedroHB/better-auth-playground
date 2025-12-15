"use client";

import { useEffect, useState } from "react";

export function useMountedState() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
