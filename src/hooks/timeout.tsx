import { useEffect, useState } from "react";

export function useTimeout(seconds: number) {
  const [next, setNext] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setNext(true), seconds * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [seconds]);

  return next;
}
