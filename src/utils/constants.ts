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
