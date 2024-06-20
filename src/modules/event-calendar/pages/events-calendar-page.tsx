import { Headline, HeadlineLevel } from '../../core';
import { formatDate, getTomorrow } from '../../core/utils';
import { EventDetailsModal, EventList, MainContent } from '../components';
import { useCalendarController } from '../controllers/use-calendar';
import { EventStatus } from '../state';

const EventsCalendarPage = () => {
  const {
    selectedEvent,
    getOverdueEvents,
    getTommorowsEvents,
    getTodaysEvents,
    onEventDetailsOpen,
    onEventDetailsClose,
  } = useCalendarController();

  return (
    <div className="bg-black-12 h-full flex flex-col">
      <div className="h-11 shrink-0 border-b border-black-18"></div>
      <div className="flex flex-row grow">
        <div className="flex px-6 pt-6 border-r border-black-18">
          <div className="flex flex-col items-center grow gap-4 bg-black-15 w-[430px] rounded-t-md pt-6 px-2">
            <Headline as={HeadlineLevel.h2}>My schedule</Headline>
            <EventList
              title={EventStatus.Overdue}
              events={getOverdueEvents()}
              onEventSelect={onEventDetailsOpen}
            />
            <EventList
              title={formatDate(new Date())}
              events={getTodaysEvents()}
              onEventSelect={onEventDetailsOpen}
            />
            <EventList
              title={formatDate(getTomorrow())}
              events={getTommorowsEvents()}
              onEventSelect={onEventDetailsOpen}
            />
          </div>
        </div>
        <MainContent />
      </div>
      <EventDetailsModal
        isOpen={!!selectedEvent}
        onClose={onEventDetailsClose}
        title={selectedEvent?.summary}
        start={selectedEvent?.start}
        end={selectedEvent?.end}
        onJoin={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export { EventsCalendarPage };
