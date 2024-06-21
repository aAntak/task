import { Headline, HeadlineLevel } from '../../core';
import { getFormattedDate, getTomorrow } from '../../core/utils';
import { EventStatus, EventViewModel } from '../state';
import { EventList } from './event-list';

type ScheduleProps = {
  overdueEvents: EventViewModel[];
  todaysEvents: EventViewModel[];
  tommorowsEvents: EventViewModel[];
  onEventDetailsOpen: (id: string) => void;
};

const Schedule = ({
  todaysEvents,
  tommorowsEvents,
  overdueEvents,
  onEventDetailsOpen,
}: ScheduleProps) => {
  return (
    <div className="flex flex-col items-center grow gap-4 bg-black-15 rounded-t-md pt-6 px-2">
      <Headline as={HeadlineLevel.h2}>My schedule</Headline>
      {overdueEvents?.length > 0 && (
        <EventList
          title={EventStatus.Overdue}
          events={overdueEvents}
          onEventSelect={onEventDetailsOpen}
        />
      )}
      <EventList
        title={getFormattedDate(new Date())}
        events={todaysEvents}
        onEventSelect={onEventDetailsOpen}
        emptyListText="No events for today. 🎉"
      />
      <EventList
        title={getFormattedDate(getTomorrow())}
        events={tommorowsEvents}
        onEventSelect={onEventDetailsOpen}
        emptyListText="No events for tommorow. 🎉"
      />
    </div>
  );
};

export { Schedule };
