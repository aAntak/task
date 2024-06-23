import { useRef, useCallback, useEffect } from 'react';

type PollingReturnTypes = {
  refreshPolling: () => void;
};

const usePolling = (
  callback: () => void,
  condition: boolean,
  interval: number = 3000
): PollingReturnTypes => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startPolling = useCallback(() => {
    callback();
    intervalRef.current = setInterval(callback, interval);
  }, [callback, interval]);

  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const refreshPolling = useCallback(() => {
    stopPolling();
    startPolling();
  }, [stopPolling, startPolling]);

  useEffect(() => {
    if (condition) {
      startPolling();
    } else {
      stopPolling();
    }
    return stopPolling;
  }, [condition, startPolling, stopPolling]);

  return { refreshPolling };
};

export { usePolling };
