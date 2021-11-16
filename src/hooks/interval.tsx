import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number = 5) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => savedCallback.current(), delay * 1000);

    return () => clearInterval(interval);
  }, [delay]);
}
