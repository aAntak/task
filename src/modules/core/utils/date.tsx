const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
};

const formatDate = (date: Date): string => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const isToday = date.toDateString() === today.toDateString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  if (isToday) {
    return `${month}-${day}, Today`;
  }

  const tomorrow = getTomorrow();
  const isTomorrow = date.toDateString() === tomorrow.toDateString();
  if (isTomorrow) {
    return `${month}-${day}, Tomorrow`;
  }

  return `${month}-${day}`;
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
  formatDate,
  getTomorrow,
  getIsCurrentTimeBetween,
  convertToHourFormat,
};
