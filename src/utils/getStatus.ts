import { SELECT } from './constants';
export const convertStatus = (status: boolean) => {
  if (!status) {
    return SELECT.STATUS[0];
  } else {
    return SELECT.STATUS[1];
  }
};

export const convertStatusToBolean = (status: string) => {
  if (status === SELECT.STATUS[0]) {
    return false;
  } else {
    return true;
  }
};
