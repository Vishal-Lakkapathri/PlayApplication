import {
  initialState,
  INC_COUNTER,
  DEC_COUNTER,
  RESET_COUNTER,
} from '../constants/counterConstants';

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INC_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case DEC_COUNTER: {
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    }
    case RESET_COUNTER: {
      return {
        ...state,
        counter: initialState.counter,
      };
    }
    default:
      return state;
  }
}
