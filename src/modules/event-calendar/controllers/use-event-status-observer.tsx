import { useEffect } from 'react';
import { EventStatus, EventViewModel } from '../state';

const getStatus = (startDate: Date, endDate: Date, status: EventStatus) => {
  const now = new Date();
  const diff = startDate.getTime() - now.getTime();

  if (now >= startDate && now <= endDate) {
    return EventStatus.Live;
  } else if (status === EventStatus.Overdue) {
    return EventStatus.Overdue;
  } else if (status === EventStatus.Passed) {
    return EventStatus.Passed;
  } else if (now < startDate && diff < 15 * 60 * 1000) {
    return EventStatus.StartsSoon;
  }
  return EventStatus.Default;
};

// Periodically checks events for changes in status using a 5-second interval.
// Would Consider using websockets or shorter polling intervals.

const useEventStatusObserver = (
  events: EventViewModel[],
  onStaleEvent: () => void
) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const staleEvent = events.find(
        ({ start, end, status }) => getStatus(start, end, status) !== status
      );

      if (staleEvent) {
        onStaleEvent();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [events, onStaleEvent]);
};

export { useEventStatusObserver };
