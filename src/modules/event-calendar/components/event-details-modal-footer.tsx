import { useState, useEffect } from 'react';
import { Text, TextStyle, Button } from 'modules/core/components';
import { getCountdownTime, getIsCurrentTimeBetween } from 'modules/core/utils';
import { Color } from 'modules/core/theme';

type EventDetailsModalFooterProps = {
  start: Date;
  end: Date;
  onJoin: () => void;
};

const getFormattedStartTime = (start: Date, end: Date): string => {
  const now = new Date();
  if (now < start) {
    return getCountdownTime(new Date(start));
  } else if (now >= start && now <= end) {
    return 'Event is happening! Quick, join, join, join!';
  } else {
    return 'Event already happened';
  }
};

const getIsJoinButtonDisabled = (start?: Date, timeDiff?: number | null) => {
  const now = new Date();
  return !start || !timeDiff || (now < start && timeDiff > 15 * 60 * 1000);
};

const getTimeDiff = (start: Date) => {
  const now = new Date();
  return start.getTime() - now.getTime();
};

const EventDetailsModalFooter = ({
  start,
  end,
  onJoin,
}: EventDetailsModalFooterProps) => {
  const [timeDiff, setTimeDiff] = useState<number>(getTimeDiff(start));
  const formattedStartTime = getFormattedStartTime(start, end);
  const isJoinButtonDisabled = getIsJoinButtonDisabled(start, timeDiff);
  const isEventActive =
    start && end ? getIsCurrentTimeBetween(start, end) : false;
  const isEventFinished = !start || !end || new Date() > end;

  useEffect(() => {
    if (isEventFinished || !start || !end) return;

    const updateTimeDiff = () => {
      const diff = getTimeDiff(start);
      setTimeDiff(diff);
    };

    const intervalId = setInterval(updateTimeDiff, 1000);

    return () => clearInterval(intervalId);
  }, [isEventFinished, start, end]);

  return (
    <div>
      <Text
        textStyle={TextStyle.Subtitle}
        color={isEventActive ? Color.Yellow1 : Color.Grey50}
      >
        {formattedStartTime}
      </Text>
      {!isEventFinished && (
        <Button fullWidth disabled={isJoinButtonDisabled} onClick={onJoin}>
          Join meeting
        </Button>
      )}
    </div>
  );
};

export { EventDetailsModalFooter };
