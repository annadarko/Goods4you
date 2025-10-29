import { useCallback, useState } from "react";

export function useBurger() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(v => !v), []);
  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return { open, toggle, openMenu, closeMenu };
}