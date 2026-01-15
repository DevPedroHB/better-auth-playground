"use client";

import { useEffect, useState } from "react";

/**
 * Returns a boolean indicating whether the component has been mounted or not.
 *
 * @returns {boolean} True if the component has been mounted, false otherwise.
 */
export function useMountedState() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
