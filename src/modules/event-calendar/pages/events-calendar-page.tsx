import {
  Button,
  IconButton,
  IconButtonSize,
  PageLayout,
  PageLayoutAside,
  PageLayoutMain,
} from '../../core/components';
import { convertToHourFormat } from '../../core/utils';
import { EventDetailsModal, MainContent, Schedule } from '../components';
import { useCalendarController } from '../controllers';

const EventsCalendarPage = () => {
  const {
    todaysEvents,
    tommorowsEvents,
    overdueEvents,
    liveEvent,
    selectedEvent,
    isEventDetailsModalOpen,
    isScheduleOpen,
    onEventDetailsOpen,
    onEventDetailsClose,
    onEventJoin,
    onScheduleVisibilityToggle,
  } = useCalendarController();

  const header = (
    <div className="flex items-center justify-between md:justify-end pr-2.5 pl-1 h-14 shrink-0 border-b border-black-18">
      <div className="md:hidden">
        <IconButton
          iconName="schedule"
          size={IconButtonSize.L}
          active={isScheduleOpen}
          onClick={onScheduleVisibilityToggle}
        />
      </div>
      {liveEvent && (
        <Button disabled={!liveEvent} onClick={onEventJoin}>
          {liveEvent.summary} at {convertToHourFormat(liveEvent.start)}
        </Button>
      )}
    </div>
  );
  return (
    <PageLayout header={header}>
      <PageLayoutAside isVisible={isScheduleOpen}>
        <Schedule
          overdueEvents={overdueEvents}
          todaysEvents={todaysEvents}
          tommorowsEvents={tommorowsEvents}
          onEventDetailsOpen={onEventDetailsOpen}
        />
      </PageLayoutAside>
      <PageLayoutMain>
        <MainContent />
      </PageLayoutMain>
      <EventDetailsModal
        isOpen={isEventDetailsModalOpen}
        onClose={onEventDetailsClose}
        title={selectedEvent?.summary}
        start={selectedEvent?.start}
        end={selectedEvent?.end}
        onJoin={onEventJoin}
      />
    </PageLayout>
  );
};

export { EventsCalendarPage };
