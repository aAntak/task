const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() + -1);

  return yesterday;
};

const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
};

const getRelativeWeekday = (date: Date): string => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = getYesterday();
  const tomorrow = getTomorrow();

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return weekday[date.getDay()];
  }
};

const getShortDateString = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const relativeDescriptor = getRelativeWeekday(date);

  if (relativeDescriptor === 'Today' || relativeDescriptor === 'Tomorrow') {
    return `${month}-${day}, ${relativeDescriptor}`;
  } else {
    return `${month}-${day}`;
  }
};

const getDateCategory = (date: Date) => {
  const today = new Date();
  const yesterday = getYesterday();
  const tomorrow = getTomorrow();

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return date.toDateString();
  }
};

const getCountdownTime = (start: Date) => {
  const now = new Date();
  const diff = start.getTime() - now.getTime();
  if (diff <= 0) return '';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.ceil((diff % (1000 * 60 * 60)) / (1000 * 60));

  let result = 'Starts in:';

  if (days > 0) {
    result += ` ${days}d`;
  }
  if (hours > 0) {
    result += ` ${hours}h`;
  }
  result += ` ${minutes}min`;

  return result.trim();
};

const convertToHourFormat = (datetime: Date) => {
  const date = new Date(datetime);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const getIsCurrentTimeBetween = (start: Date, end: Date) => {
  const now = new Date();
  return now >= start && now <= end;
};

export {
  getCountdownTime,
  getShortDateString,
  getDateCategory,
  getTomorrow,
  getIsCurrentTimeBetween,
  convertToHourFormat,
};
