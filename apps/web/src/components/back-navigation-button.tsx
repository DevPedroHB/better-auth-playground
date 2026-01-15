"use client";

import { useRouter } from "next/navigation";
import { type ComponentProps, type MouseEvent, useCallback } from "react";
import { Button } from "./ui/button";

interface IBackNavigationButton extends ComponentProps<typeof Button> {
  fallbackPath?: string;
}

export function BackNavigationButton({
  fallbackPath = "/",
  onClick,
  ...props
}: IBackNavigationButton) {
  const router = useRouter();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);

      if (event.defaultPrevented) {
        return;
      }

      const hasNavigationHistory = window.history.length > 2;

      if (hasNavigationHistory) {
        router.back();
      } else {
        router.push(fallbackPath);
      }
    },
    [onClick, router, fallbackPath],
  );

  return <Button type="button" onClick={handleClick} {...props} />;
}
