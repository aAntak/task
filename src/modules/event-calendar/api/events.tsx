enum EventCategory {
  Meeting = 'meeting',
  OpenSession = 'open_session',
}

type Event = {
  id: number;
  summary: string;
  url: string;
  category: EventCategory;
  start: string;
  end: string;
};

const eventsService = {
  find: async (): Promise<Event[]> => {
    const response = await fetch(
      'https://66740dcb75872d0e0a94e1c0.mockapi.io/events'
    );
    const data = await response.json();
    return data;
  },
};

export { eventsService, EventCategory };
export type { Event };
