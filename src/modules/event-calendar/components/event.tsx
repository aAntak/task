import { Color } from 'modules/core/theme';
import { Text, TextElementType, TextStyle } from '../../core/components';
import { convertToHourFormat } from '../../core/utils';
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

const eventTypeColorMap: Record<EventType, Color> = {
  [EventType.Correction]: Color.LightPurple,
  [EventType.Meeting]: Color.Yellow2,
  [EventType.Session]: Color.Grey50,
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
      className={`flex flex-row justify-between items-center w-full rounded px-3 py-2 ${
        isLive ? 'bg-yellow-1 bg-opacity-55' : 'bg-black-22'
      }  ${isPastEvent ? 'opacity-40' : 'opacity-1'} `}
      disabled={isPastEvent}
      onClick={handleClick}
    >
      <span className="flex flex-col items-start">
        <Text
          as={TextElementType.span}
          textStyle={TextStyle.BodyText}
          color={Color.Grey92}
        >
          {title}
        </Text>
        <Text
          as={TextElementType.span}
          textStyle={TextStyle.SubtitleSmall}
          color={eventTypeColorMap[type]}
        >
          {type.toUpperCase()}
        </Text>
      </span>
      {isOverdue ? (
        <Text
          as={TextElementType.span}
          textStyle={TextStyle.Subtitle}
          color={Color.Red}
        >
          Overdue
        </Text>
      ) : (
        <span className="flex flex-row items-center gap-3">
          {isLive && (
            <Text
              as={TextElementType.span}
              textStyle={TextStyle.Subtitle}
              color={Color.Yellow1}
            >
              Live
            </Text>
          )}
          <span className="flex flex-col opacity-50">
            <Text
              as={TextElementType.span}
              textStyle={TextStyle.Subtitle}
              color={isPastEvent ? Color.Grey50 : Color.Grey92}
            >
              {convertToHourFormat(start)}
            </Text>
            <Text
              as={TextElementType.span}
              textStyle={TextStyle.Subtitle}
              color={isLive ? Color.Grey92 : Color.Grey50}
            >
              {convertToHourFormat(end)}
            </Text>
          </span>
        </span>
      )}
    </button>
  );
};

export { Event, EventType };
