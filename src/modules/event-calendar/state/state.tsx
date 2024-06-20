enum EventType {
  Correction = 'Correction',
  Meeting = 'Meeting',
  Session = 'Session',
}

enum EventStatus {
  Default = 'Default',
  Live = 'Live',
  Overdue = 'Overdue',
}

type EventViewModel = {
  id: number;
  summary: string;
  url: string;
  type: EventType;
  status: EventStatus;
  start: Date;
  end: Date;
};

export { EventType, EventStatus };
export type { EventViewModel };
