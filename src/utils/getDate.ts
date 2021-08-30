const convertDay = (day: number): string => {
  const dayInfo = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ];
  return dayInfo[day - 1];
};
const getDate = (date: Date): string => {
  return (
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDate() +
    '일 ' +
    convertDay(date.getDay())
  );
};

export default getDate;
