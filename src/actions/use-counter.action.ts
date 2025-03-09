export type UseCounterAction =
  | {
      type: "increaseBy";
      payload: { value: number; maxCount: number };
    }
  | {
      type: "decreaseBy";
      payload: { value: number; minCount: number };
    }
  | {
      type: "reset";
      payload: { initialValue: number };
    };

export const doReset = (initialCount: number): UseCounterAction => ({
  type: "reset",
  payload: { initialValue: initialCount },
});

export const doIncreaseBy = (
  value: number,
  maxCount: number
): UseCounterAction => ({
  type: "increaseBy",
  payload: { value, maxCount },
});

export const doDecreaseBy = (
  value: number,
  minCount: number
): UseCounterAction => ({
  type: "decreaseBy",
  payload: { value, minCount },
});
