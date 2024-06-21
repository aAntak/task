import { useRef, useCallback, useEffect } from 'react';

const usePolling = (
  callback: () => void,
  condition: boolean,
  interval = 3000
): void => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startPolling = useCallback(() => {
    callback();
    intervalRef.current = setInterval(() => {
      callback();
    }, interval);
  }, [callback, interval]);

  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [intervalRef]);

  useEffect(() => {
    if (condition) {
      startPolling();
    } else {
      stopPolling();
    }
    return () => stopPolling();
  }, [condition, startPolling, stopPolling]);
};

export { usePolling };
