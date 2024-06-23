import { convertToHourFormat } from 'modules/core/utils';
import { EventStatus, EventType } from '../state';

type EventProps = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: EventType;
  onClick: (id: string) => void;
  status: EventStatus;
};

const eventButtonVariant: Record<EventStatus, string> = {
  [EventStatus.Default]: 'bg-black-22 hover:bg-black-26',
  [EventStatus.StartsSoon]: 'bg-black-22 hover:bg-black-26',
  [EventStatus.Live]: 'bg-yellow-1 bg-opacity-55 hover:bg-opacity-60',
  [EventStatus.Overdue]: 'bg-black-22 hover:bg-black-26',
  [EventStatus.Passed]: 'bg-black-22 bg-opacity-40',
};

const titleClassVariant: Record<EventStatus, string> = {
  [EventStatus.Default]: 'text-grey-92',
  [EventStatus.StartsSoon]: 'text-grey-92',
  [EventStatus.Live]: 'text-grey-92',
  [EventStatus.Overdue]: 'text-grey-92',
  [EventStatus.Passed]: 'text-grey-50',
};

const startTimeClassVariant: Record<EventStatus, string> = {
  [EventStatus.Default]: 'text-grey-92 text-opacity-50',
  [EventStatus.StartsSoon]: 'text-grey-92 text-opacity-50',
  [EventStatus.Live]: 'text-grey-92 text-opacity-50',
  [EventStatus.Overdue]: 'text-grey-92 text-opacity-50',
  [EventStatus.Passed]: 'text-grey-50',
};

const endTimeClassVariant: Record<EventStatus, string> = {
  [EventStatus.Default]: 'text-grey-50 text-opacity-50',
  [EventStatus.StartsSoon]: 'text-grey-50 text-opacity-50',
  [EventStatus.Live]: 'text-grey-92 text-opacity-50',
  [EventStatus.Overdue]: 'text-grey-50 text-opacity-50',
  [EventStatus.Passed]: 'text-grey-50',
};

const eventTypeColorMap: Record<EventType, string> = {
  [EventType.Correction]: 'text-light-purple',
  [EventType.Meeting]: 'text-yellow-2',
  [EventType.Session]: 'text-grey-50',
};

const getTypeVariant = (status: EventStatus, type: EventType) => {
  if (status === EventStatus.Live) {
    return 'text-grey-92 text-opacity-65';
  } else if (status === EventStatus.Passed) {
    return 'text-grey-50';
  }
  return eventTypeColorMap[type];
};

const Event = ({
  id,
  title,
  start,
  end,
  type,
  status,
  onClick,
}: EventProps) => {
  const isLive = status === EventStatus.Live;
  const isOverdue = status === EventStatus.Overdue;
  const isPastEvent = status === EventStatus.Passed;

  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <button
      className={`flex flex-row justify-between items-center w-full rounded px-3 py-1.5 gap-3 ${eventButtonVariant[status]}`}
      disabled={isPastEvent}
      onClick={handleClick}
    >
      <span className="flex flex-col items-start min-w-0">
        <span
          className={`w-full text-body truncate ${titleClassVariant[status]}`}
        >
          {title}
        </span>
        <span
          className={`text-subtitle-small uppercase ${getTypeVariant(
            status,
            type
          )}`}
        >
          {type}
        </span>
      </span>
      {isOverdue ? (
        <span className="text-subtitle text-red">Overdue</span>
      ) : (
        <span className="flex flex-row items-center gap-3">
          {isLive && <span className="text-subtitle text-yellow-1">Live</span>}
          <span className="flex flex-col">
            <span className={`text-subtitle ${startTimeClassVariant[status]}`}>
              {convertToHourFormat(start)}
            </span>
            <span className={`text-subtitle ${endTimeClassVariant[status]}`}>
              {convertToHourFormat(end)}
            </span>
          </span>
        </span>
      )}
    </button>
  );
};

export { Event, EventType };
