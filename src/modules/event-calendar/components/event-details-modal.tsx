import {
  Button,
  Headline,
  HeadlineLevel,
  Modal,
  TextColor,
  TextStyle,
  Text,
} from '../../core';

type EventDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  start?: Date;
  end?: Date;
  onJoin: () => void;
};

const EventDetailsModal = ({
  isOpen,
  onClose,
  title,
  start,
  end,
}: EventDetailsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex gap-y-10 flex-col">
        <div>
          <Headline as={HeadlineLevel.h2}>{title}</Headline>
          <Text textStyle={TextStyle.BodyText} color={TextColor.Grey50}>
            {start?.toDateString()} {end?.toDateString()}
          </Text>
        </div>
        <div>
          <Text textStyle={TextStyle.Subtitle} color={TextColor.Yellow1}>
            Starts in: {start?.toDateString()}
          </Text>
          <Button>Join meeting</Button>
        </div>
      </div>
    </Modal>
  );
};

export { EventDetailsModal };
