import {
  Button,
  Header,
  IconButton,
  IconButtonSize,
} from 'modules/core/components';
import { convertToHourFormat } from 'modules/core/utils';
import { EventViewModel } from '../state';

type EventsPageHeaderProps = {
  isScheduleOpen: boolean;
  liveEvent?: EventViewModel;
  onScheduleVisibilityToggle: () => void;
  onEventJoin: () => void;
};

const EventsPageHeader = ({
  liveEvent,
  isScheduleOpen,
  onEventJoin,
  onScheduleVisibilityToggle,
}: EventsPageHeaderProps) => (
  <Header
    leftContent={
      <div className="md:hidden">
        <IconButton
          iconName="schedule"
          size={IconButtonSize.L}
          active={isScheduleOpen}
          onClick={onScheduleVisibilityToggle}
        />
      </div>
    }
    rightContent={
      liveEvent && (
        <Button onClick={onEventJoin}>
          {liveEvent.summary} at {convertToHourFormat(liveEvent.start)}
        </Button>
      )
    }
  />
);

export { EventsPageHeader };
