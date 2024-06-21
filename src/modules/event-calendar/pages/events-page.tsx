import {
  PageLayout,
  PageLayoutAside,
  PageLayoutMain,
} from '../../core/components';
import {
  EventDetailsModal,
  MainContent,
  Schedule,
  EventsPageHeader,
} from '../components';
import { useEventsPageController } from '../controllers';

const EventsPage = () => {
  const {
    todaysEvents,
    tommorowsEvents,
    overdueEvents,
    liveEvent,
    selectedEvent,
    isEventDetailsModalOpen,
    isScheduleOpen,
    isInitializing,
    onEventDetailsOpen,
    onEventDetailsClose,
    onEventJoin,
    onScheduleVisibilityToggle,
  } = useEventsPageController();

  const header = (
    <EventsPageHeader
      isScheduleOpen={isScheduleOpen}
      liveEvent={liveEvent}
      onScheduleVisibilityToggle={onScheduleVisibilityToggle}
      onEventJoin={onEventJoin}
    />
  );

  return (
    <PageLayout header={header}>
      <PageLayoutAside isVisible={isScheduleOpen}>
        <Schedule
          overdueEvents={overdueEvents}
          todaysEvents={todaysEvents}
          tommorowsEvents={tommorowsEvents}
          onEventDetailsOpen={onEventDetailsOpen}
          isInitializing={isInitializing}
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

export { EventsPage };