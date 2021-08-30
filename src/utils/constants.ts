const PRIORITY = {
  HIGH: ['높음', 'red'],
  MIDDLE: ['보통', 'green'],
  LOW: ['낮음', 'yellow'],
};

interface ISelect {
  [key: string]: string[][];
}
export const SELECT: ISelect = {
  PRIORITY: [PRIORITY.HIGH, PRIORITY.MIDDLE, PRIORITY.LOW],
};
