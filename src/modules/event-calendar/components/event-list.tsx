import { Event } from './event';
import { EventViewModel } from '../state';

type EventListProps = {
  title: string;
  events: EventViewModel[];
  emptyListText?: string;
  onEventSelect: (id: string) => void;
};

const EventList = ({
  title,
  events,
  emptyListText = 'No events for this day. 🎉',
  onEventSelect,
}: EventListProps) => (
  <div className="flex flex-col w-full">
    <p className="text-subtitle-medium text-grey-50">{title}</p>
    {!events.length ? (
      <p className="flex items-center justify-center p-3 text-subtitle text-white">
        {emptyListText}
      </p>
    ) : (
      <div className="flex flex-col gap-1">
        {events.map(({ id, summary, start, end, type, status }) => (
          <Event
            key={id}
            id={id}
            title={summary}
            start={start}
            end={end}
            type={type}
            onClick={onEventSelect}
            status={status}
          />
        ))}
      </div>
    )}
  </div>
);

export { EventList };
