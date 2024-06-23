import { getShortDateString, getTomorrow } from 'modules/core/utils';
import { EventStatus, EventViewModel } from '../state';
import { EventList } from './event-list';

type ScheduleProps = {
  overdueEvents: EventViewModel[];
  todaysEvents: EventViewModel[];
  tommorowsEvents: EventViewModel[];
  onEventDetailsOpen: (id: string) => void;
  isInitializing: boolean;
};

const Schedule = ({
  todaysEvents,
  tommorowsEvents,
  overdueEvents,
  isInitializing,
  onEventDetailsOpen,
}: ScheduleProps) => {
  if (isInitializing) {
    return <div className="w-full bg-black-15 rounded-t-md animate-pulse" />;
  }

  return (
    <div className="flex flex-col items-center grow gap-4 bg-black-15 rounded-md pt-6 px-2 pb-4 max-h-full overflow-auto">
      <h2 className="text-headline-medium text-grey-92 pb-1">My schedule</h2>
      {overdueEvents?.length > 0 && (
        <EventList
          title={EventStatus.Overdue}
          events={overdueEvents}
          onEventSelect={onEventDetailsOpen}
        />
      )}
      <EventList
        title={getShortDateString(new Date())}
        events={todaysEvents}
        onEventSelect={onEventDetailsOpen}
        emptyListText="No events for today. 🎉"
      />
      <EventList
        title={getShortDateString(getTomorrow())}
        events={tommorowsEvents}
        onEventSelect={onEventDetailsOpen}
        emptyListText="No events for tomorrow. 🎉"
      />
    </div>
  );
};

export { Schedule };
