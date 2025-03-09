import { UseCounterAction } from "../actions/use-counter.action";
import { UseCounterState } from "../interfaces/counter.interfaces";

const increaseBy = (
  state: UseCounterState,
  value: number,
  maxCount: number
) => {
  if (state.count === maxCount) {
    return state;
  }

  return {
    count: Math.min(maxCount, state.count + value),
    numberOfChanges:
      state.count === maxCount
        ? state.numberOfChanges
        : state.numberOfChanges + 1,
    prevCount: state.count,
  };
};

const decreaseBy = (
  state: UseCounterState,
  value: number,
  minCount: number
) => {
  if (state.count === minCount) {
    return state;
  }

  return {
    count: Math.max(minCount, state.count - value),
    numberOfChanges:
      state.count === minCount
        ? state.numberOfChanges
        : state.numberOfChanges + 1,
    prevCount: state.count,
  };
};

const reset = (state: UseCounterState, initialValue: number) => {
  return {
    count: initialValue,
    numberOfChanges: state.numberOfChanges + 1,
    prevCount: state.count,
  };
};

export const useCounterReducer = (
  state: UseCounterState,
  action: UseCounterAction
): UseCounterState => {
  switch (action.type) {
    case "increaseBy":
      return increaseBy(state, action.payload.value, action.payload.maxCount);
    case "decreaseBy":
      return decreaseBy(state, action.payload.value, action.payload.minCount);
    case "reset":
      return reset(state, action.payload.initialValue);
    default:
      return state;
  }
};
