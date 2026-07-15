"use client";

import { useEffect, useState } from "react";

export function useFinePointer() {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFine(query.matches);

    const handleChange = (event) => setIsFine(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return isFine;
}
