import { Link, LinkTarget } from 'modules/core/components';
import { getCountdownTime } from 'modules/core/utils';
import { EventStatus } from '../state';

type EventDetailsModalFooterProps = {
  start: Date;
  url: string;
  status: EventStatus;
};

const getFormattedStartTime = (status: EventStatus, start: Date): string => {
  if (status === EventStatus.Live) {
    return 'Event is happening! Quick, join, join, join!';
  } else if (status === EventStatus.Overdue || status === EventStatus.Passed) {
    return 'Event already happened';
  }
  return getCountdownTime(new Date(start));
};

const joinLinkStateMap: Record<
  EventStatus,
  { visible: boolean; disabled?: boolean }
> = {
  [EventStatus.Default]: { visible: true, disabled: true },
  [EventStatus.Live]: { visible: true, disabled: false },
  [EventStatus.Overdue]: { visible: false },
  [EventStatus.Passed]: { visible: false },
  [EventStatus.StartsSoon]: { visible: true, disabled: false },
};

const EventDetailsModalFooter = ({
  start,
  url,
  status,
}: EventDetailsModalFooterProps) => {
  const formattedStartTime = getFormattedStartTime(status, start);
  const joinLinkState = joinLinkStateMap[status];

  return (
    <div className="flex flex-col gap-2.5">
      <p
        className={`text-subtitle ${
          status === EventStatus.Live ? 'text-yellow-1' : 'text-grey-50'
        }`}
      >
        {formattedStartTime}
      </p>
      {joinLinkState.visible && (
        <Link
          href={url}
          target={LinkTarget.Blank}
          fullWidth
          disabled={joinLinkState.disabled}
        >
          Join meeting
        </Link>
      )}
    </div>
  );
};

export { EventDetailsModalFooter };
