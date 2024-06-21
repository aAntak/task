import { Color } from 'modules/core/theme';
import {
  Headline,
  HeadlineLevel,
  Modal,
  TextStyle,
  Text,
} from 'modules/core/components';
import { EventDetailsModalFooter } from './event-details-modal-footer';
import { convertToHourFormat, getDateCategory } from 'modules/core/utils';

type EventDetailsModalProps = {
  isOpen: boolean;
  title?: string;
  start?: Date;
  end?: Date;
  url?: string;
  onClose: () => void;
  onJoin: () => void;
};

const EventDetailsModal = ({
  isOpen,
  title,
  start,
  end,
  onClose,
  onJoin,
}: EventDetailsModalProps) => {
  const formattedStartTime = start && convertToHourFormat(start);
  const formattedEndTime = end && convertToHourFormat(end);
  const dateCategory = start && getDateCategory(start);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex gap-y-10 flex-col">
        <div>
          <Headline as={HeadlineLevel.h2}>{title}</Headline>
          <Text textStyle={TextStyle.BodyText} color={Color.Grey50}>
            {dateCategory} {formattedStartTime}-{formattedEndTime}
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
