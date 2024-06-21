import { TextStyle, Text } from 'modules/core/components';
import { Event } from './event';
import { EventViewModel } from '../state';
import { Color } from 'modules/core/theme';

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
    <Text textStyle={TextStyle.SubtitleMedium} color={Color.Grey50}>
      {title}
    </Text>
    {!events.length ? (
      <div className="flex items-center justify-center p-3">
        <Text textStyle={TextStyle.Subtitle}>{emptyListText}</Text>
      </div>
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
