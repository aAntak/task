import {
  Header,
  IconButton,
  IconButtonSize,
  Link,
  LinkTarget,
} from 'modules/core/components';
import { convertToHourFormat } from 'modules/core/utils';
import { EventViewModel } from '../state';
import { memo } from 'react';

type EventsPageHeaderProps = {
  isScheduleOpen: boolean;
  liveEvent?: EventViewModel;
  onScheduleVisibilityToggle: () => void;
};

const EventsPageHeader = memo(
  ({
    liveEvent,
    isScheduleOpen,
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
          <Link href={liveEvent.url} target={LinkTarget.Blank}>
            {liveEvent.summary} at {convertToHourFormat(liveEvent.start)}
          </Link>
        )
      }
    />
  )
);

export { EventsPageHeader };
