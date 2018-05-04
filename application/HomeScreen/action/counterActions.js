import { INC_COUNTER, DEC_COUNTER, RESET_COUNTER } from '../constants/counterConstants';

export const incrementCounter = () => ({
  type: INC_COUNTER,
});

export const decrementCounter = () => ({
  type: DEC_COUNTER,
});

export const resetCounter = () => ({
  type: RESET_COUNTER,
});
