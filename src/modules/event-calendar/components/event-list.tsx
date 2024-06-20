import { TextStyle, Text, TextColor } from '../../core';
import { Event } from './event';
import { EventViewModel } from '../state';

type EventListProps = {
  title: string;
  events: EventViewModel[];
  onEventSelect: (id: number) => void;
};

const EventList = ({ onEventSelect, title, events }: EventListProps) => (
  <div className="flex flex-col w-full">
    <Text textStyle={TextStyle.SubtitleMedium} color={TextColor.Grey50}>
      {title}
    </Text>
    <div className="flex flex-col gap-1">
      {events.map(({ id, summary, start, end, type }) => (
        <Event
          key={id}
          id={id}
          title={summary}
          start={start}
          end={end}
          type={type}
          onClick={onEventSelect}
        />
      ))}
    </div>
  </div>
);

export { EventList };
