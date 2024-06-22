import { useCallback, useMemo, useState } from 'react';
import { usePolling } from 'modules/core/utils';
import { ScreenSize, getMediaQuery } from 'modules/core/theme';
import {
  eventsService,
  reviewsService,
  Review,
  Event,
  ReviewState,
  EventCategory,
} from '../api';
import { EventType } from '../components';
import { EventStatus, EventViewModel } from '../state';

const getStatus = (startDate: Date, endDate: Date, state?: ReviewState) => {
  const now = new Date();
  if (now >= startDate && now <= endDate) {
    return EventStatus.Live;
  } else if (state && state !== ReviewState.Completed && now >= endDate) {
    return EventStatus.Overdue;
  } else if (now >= endDate) {
    return EventStatus.Passed;
  }
  return EventStatus.Default;
};

const sortEventsByStartDate = (events: EventViewModel[]) => {
  return events.sort((a, b) => a.start.getTime() - b.start.getTime());
};

const filterEvents = (events: EventViewModel[]) =>
  events.filter(
    (event) =>
      event.status === EventStatus.Overdue ||
      event.start.getDate() === new Date().getDate() ||
      event.start.getDate() === new Date().getDate() + 1
  );

const mapEvents = (events: Event[], reviews: Review[]): EventViewModel[] => {
  const mappedEvents = events.map(
    ({ id, summary, url, category, start, end }): EventViewModel => {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const type =
        category === EventCategory.Meeting
          ? EventType.Meeting
          : EventType.Session;
      return {
        id: `${id}-${type}`,
        summary,
        url,
        type,
        status: getStatus(startDate, endDate),
        start: startDate,
        end: endDate,
      };
    }
  );

  const mappedReviews = reviews.map(
    ({ id, summary, url, start, end, state }): EventViewModel => {
      const startDate = new Date(start);
      const endDate = new Date(end);
      return {
        id: `${id}-${EventType.Correction}`,
        summary,
        url,
        type: EventType.Correction,
        status: getStatus(startDate, endDate, state),
        start: startDate,
        end: endDate,
      };
    }
  );
  const allEvents = [...mappedEvents, ...mappedReviews];
  const filteredEvents = filterEvents(allEvents);
  const sortedEvents = sortEventsByStartDate(filteredEvents);

  return sortedEvents;
};

// TODO: set as 5 mins
const pollingIntervalInMs = 3000000;

const useEventsPageController = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isScheduleOpen, setIsScheduleOpen] = useState(
    window.matchMedia(getMediaQuery(ScreenSize.md)).matches
  );
  const [events, setEvents] = useState<EventViewModel[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(
    undefined
  );
  const [isEventDetailsModalOpen, setIsEventDetailsModalOpen] = useState(false);
  const selectedEvent = events.find(({ id }) => id === selectedEventId);

  const todaysEvents = useMemo(
    () =>
      events.filter(
        ({ start, status }) =>
          start.getDate() === new Date().getDate() &&
          status !== EventStatus.Overdue
      ),
    [events]
  );

  const tommorowsEvents = useMemo(
    () =>
      events.filter(
        ({ start }) => start.getDate() === new Date().getDate() + 1
      ),
    [events]
  );

  const overdueEvents = useMemo(
    () => events.filter(({ status }) => status === EventStatus.Overdue),
    [events]
  );

  const liveEvent = todaysEvents.find(
    ({ status }) => status === EventStatus.Live
  );

  const getEvents = useCallback(async () => {
    try {
      setIsInitializing(true);
      const events = await eventsService.find();
      const reviews = await reviewsService.find();
      const mappedEvents = mapEvents(events, reviews);
      setEvents(mappedEvents);
    } catch {
      // TODO: Error handling
    } finally {
      setIsInitializing(false);
    }
  }, []);

  usePolling(getEvents, true, pollingIntervalInMs);

  const onEventDetailsClose = useCallback(() => {
    setIsEventDetailsModalOpen(false);
  }, []);

  const onEventDetailsOpen = useCallback((id: string) => {
    setSelectedEventId(id);
    setIsEventDetailsModalOpen(true);
  }, []);

  const onScheduleVisibilityToggle = useCallback(() => {
    setIsScheduleOpen((prev) => !prev);
  }, []);

  return {
    events,
    todaysEvents,
    tommorowsEvents,
    overdueEvents,
    selectedEvent,
    liveEvent,
    isEventDetailsModalOpen,
    isInitializing,
    isScheduleOpen,
    onScheduleVisibilityToggle,
    onEventDetailsOpen,
    onEventDetailsClose,
  };
};

export { useEventsPageController };
