import * as CounterActions from "../actions/use-counter.action";
import * as CounterAnimations from "../animations/counter.animations";
import { gsap } from "gsap";
import { UseCounterState } from "../interfaces/counter.interfaces";
import { useCounterReducer } from "../state/counterReducer";
import {
  useCallback,
  useRef,
  useLayoutEffect,
  useReducer,
  useEffect,
} from "react";

const INITIAL_STATE: UseCounterState = {
  count: 0,
  numberOfChanges: 0,
  prevCount: 0,
};

export interface Config {
  initialCount: number;
  maxCount: number;
  minCount: number;
}

export const useCounter = ({ initialCount, maxCount, minCount }: Config) => {
  // Component state

  INITIAL_STATE.count = initialCount;

  const [counterState, dispatch] = useReducer(useCounterReducer, INITIAL_STATE);

  // Actions

  const incrementBy = useCallback(
    (value: number) => {
      dispatch(CounterActions.doIncreaseBy(value, maxCount));
    },
    [maxCount]
  );

  const decrementBy = useCallback(
    (value: number) => {
      dispatch(CounterActions.doDecreaseBy(value, minCount));
    },
    [minCount]
  );

  const reset = useCallback(() => {
    dispatch(CounterActions.doReset(initialCount));
  }, [initialCount]);

  // Component refs and animation timeline

  const counterHTMLElement = useRef<HTMLHeadingElement>(null!);
  const tl = useRef<gsap.core.Timeline>(gsap.timeline());
  const isAnimationInitialized = useRef(false);

  useLayoutEffect(() => {
    if (!counterHTMLElement.current || isAnimationInitialized.current) return;

    tl.current
      .to(counterHTMLElement.current, CounterAnimations.animationInitBounce)
      .to(counterHTMLElement.current, CounterAnimations.animationEndBounce)
      .pause();

    isAnimationInitialized.current = true;
  }, []);

  useLayoutEffect(() => {
    tl.current.play(0);
  }, [counterState.count]);

  useEffect(() => {
    console.log(counterState);
  }, [counterState]);

  return {
    // state
    ...counterState,
    state: counterState,

    // actions
    incrementBy,
    decrementBy,
    reset,

    // refs
    counterHTMLElement,
  };
};
