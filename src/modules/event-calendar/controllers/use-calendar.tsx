import { useEffect, useState } from 'react';
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

const mapSchedule = (events: Event[], reviews: Review[]): EventViewModel[] => {
  const mappedEvents = events.map(
    ({ id, summary, url, category, start, end }): EventViewModel => {
      const startDate = new Date(start);
      const endDate = new Date(end);
      return {
        id,
        summary,
        url,
        type:
          category === EventCategory.Meeting
            ? EventType.Meeting
            : EventType.Session,
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
        id,
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

const useCalendarController = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [schedule, setSchedule] = useState<EventViewModel[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<number | undefined>(
    undefined
  );

  console.log(selectedEventId);

  const getEvents = async () => {
    setIsInitializing(true);
    const events = await eventsService.find();
    const reviews = await reviewsService.find();
    const mappedSchedule = mapSchedule(events, reviews);
    setSchedule(mappedSchedule);
    setIsInitializing(false);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const onEventDetailsClose = () => setSelectedEventId(undefined);
  const onEventDetailsOpen = (id: number) => setSelectedEventId(id);

  const getTodaysEvents = () =>
    schedule.filter((event) => event.start.getDate() === new Date().getDate());

  const getTommorowsEvents = () =>
    schedule.filter(
      (event) => event.start.getDate() === new Date().getDate() + 1
    );

  const getOverdueEvents = () =>
    schedule.filter((event) => event.status === EventStatus.Overdue);

  const selectedEvent = schedule.find(({ id }) => id === selectedEventId);

  return {
    schedule,
    selectedEvent,
    isInitializing,
    onEventDetailsOpen,
    onEventDetailsClose,
    getTodaysEvents,
    getTommorowsEvents,
    getOverdueEvents,
  };
};

export { useCalendarController };
