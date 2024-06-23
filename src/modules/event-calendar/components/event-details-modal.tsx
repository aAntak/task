import { Modal } from 'modules/core/components';
import { EventDetailsModalFooter } from './event-details-modal-footer';
import { convertToHourFormat, getDateCategory } from 'modules/core/utils';
import { EventStatus } from '../state';

type EventDetailsModalProps = {
  isOpen: boolean;
  title?: string;
  start?: Date;
  end?: Date;
  url?: string;
  onClose: () => void;
  status?: EventStatus;
};

const EventDetailsModal = ({
  isOpen,
  title,
  start,
  end,
  url,
  status,
  onClose,
}: EventDetailsModalProps) => {
  const formattedStartTime = start && convertToHourFormat(start);
  const formattedEndTime = end && convertToHourFormat(end);
  const dateCategory = start && getDateCategory(start);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex gap-y-10 flex-col">
        <div>
          <h2 className="text-headline-medium text-grey-95 pb-1">{title}</h2>
          <p className="text-body text-grey-50">
            {dateCategory} {formattedStartTime}-{formattedEndTime}
          </p>
        </div>
        {start && end && url && status && (
          <EventDetailsModalFooter start={start} url={url} status={status} />
        )}
      </div>
    </Modal>
  );
};

export { EventDetailsModal };
