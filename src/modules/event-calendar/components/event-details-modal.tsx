import {
  Headline,
  HeadlineLevel,
  Modal,
  TextColor,
  TextStyle,
  Text,
} from '../../core';
import { EventDetailsModalFooter } from './event-details-modal-footer';

type EventDetailsModalProps = {
  isOpen: boolean;
  title?: string;
  start?: Date;
  end?: Date;
  url?: string;
  onClose: () => void;
  onJoin: () => void;
};

const getFormattedDateAndTime = (start?: Date, end?: Date): string => {
  if (!start || !end) return '';

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const startTime = `${start.getHours().toString().padStart(2, '0')}:${start
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
  const endTime = `${end.getHours().toString().padStart(2, '0')}:${end
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  const isToday = start.toDateString() === today.toDateString();
  const isTomorrow = start.toDateString() === tomorrow.toDateString();

  let dayPrefix = '';
  if (isToday) {
    dayPrefix = 'Today';
  } else if (isTomorrow) {
    dayPrefix = 'Tomorrow';
  } else {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayOfWeek = daysOfWeek[start.getDay()];
    const month = start.toLocaleString('default', { month: 'short' });
    const day = start.getDate().toString().padStart(2, '0');
    dayPrefix = `${dayOfWeek}, ${month} ${day}`;
  }

  return `${dayPrefix} ${startTime}-${endTime}`;
};

const EventDetailsModal = ({
  isOpen,
  title,
  start,
  end,
  onClose,
  onJoin,
}: EventDetailsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex gap-y-10 flex-col">
        <div>
          <Headline as={HeadlineLevel.h2}>{title}</Headline>
          <Text textStyle={TextStyle.BodyText} color={TextColor.Grey50}>
            {getFormattedDateAndTime(start, end)}
          </Text>
        </div>
        {start && end && (
          <EventDetailsModalFooter start={start} end={end} onJoin={onJoin} />
        )}
      </div>
    </Modal>
  );
};

export { EventDetailsModal };
