enum EventType {
  Correction = 'Correction',
  Meeting = 'Meeting',
  Session = 'Session',
}

enum EventStatus {
  Default = 'Default',
  StartsSoon = 'StartsSoon',
  Live = 'Live',
  Overdue = 'Overdue',
  Passed = 'Passed',
}

type EventViewModel = {
  id: string;
  summary: string;
  url: string;
  type: EventType;
  status: EventStatus;
  start: Date;
  end: Date;
};

export { EventType, EventStatus };
export type { EventViewModel };
