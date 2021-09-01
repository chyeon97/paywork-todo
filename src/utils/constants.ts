const PRIORITY = {
  HIGH: ['높음', '#F60000'],
  MIDDLE: ['보통', '#13B123'],
  LOW: ['낮음', '#F6B100'],
};

interface ISelect {
  [key: string]: string[][];
}
export const SELECT: ISelect = {
  PRIORITY: [PRIORITY.HIGH, PRIORITY.MIDDLE, PRIORITY.LOW],
};

export const URL = 'https://f248a602-3244-4229-9f05-f6cd922294fe.mock.pstmn.io';
export const DETAIL = '/todo';
