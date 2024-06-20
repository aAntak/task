import {
  Text,
  TextColor,
  TextElementType,
  TextStyle,
} from '../../core/components';
import { convertToHourFormat, getIsCurrentTimeBetween } from '../../core/utils';
import { EventType } from '../state';

type EventProps = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  type: EventType;
  onClick: (id: number) => void;
};

const eventTypeColorMap: Record<EventType, TextColor> = {
  [EventType.Correction]: TextColor.LightPurple,
  [EventType.Meeting]: TextColor.Yellow2,
  [EventType.Session]: TextColor.Grey50,
};

const Event = ({ id, title, start, end, type, onClick }: EventProps) => {
  const isLive = getIsCurrentTimeBetween(start, end);

  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <button
      className={`w-full rounded px-3 py-2 ${
        isLive ? 'bg-yellow-1 bg-opacity-55' : 'bg-black-22'
      }`}
      onClick={handleClick}
    >
      <span className="flex flex-row justify-between">
        <span className="flex flex-col items-start">
          <Text
            as={TextElementType.span}
            textStyle={TextStyle.BodyText}
            color={TextColor.Grey92}
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
        <span className="flex flex-col">
          <Text
            as={TextElementType.span}
            textStyle={TextStyle.Subtitle}
            color={TextColor.Grey92}
          >
            {convertToHourFormat(start)}
          </Text>
          <Text
            as={TextElementType.span}
            textStyle={TextStyle.Subtitle}
            color={TextColor.Grey50}
          >
            {convertToHourFormat(end)}
          </Text>
        </span>
      </span>
    </button>
  );
};

export { Event, EventType };
