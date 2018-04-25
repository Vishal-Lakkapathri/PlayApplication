export const incrementCounter = state => (
  { counterValue: state.counterValue + 1 }
);

export const decrementCounter = state => (
  { counterValue: state.counterValue - 1 }
);

export const resetCounter = () => (
  { counterValue: 0 }
);
