import { FC } from "react";
import { useCounter } from "../hooks/useCounter";
import { RiResetLeftLine } from "react-icons/ri";

interface CounterProps {
  initialCount: number;
  className: string;
  max: number;
  min: number;
}

export const Counter: FC<CounterProps> = ({
  initialCount,
  className,
  max,
  min,
}) => {
  const { count, decrementBy, incrementBy, reset, numberOfChanges, counterHTMLElement } = useCounter({
    initialCount,
    maxCount: max,
    minCount: min,
  });    


  return (
    <section
      className={`animate-fade-up animate-duration-300 animate-ease-out max-w-sm relative overflow-hidden bg-neutral-800 rounded-lg text-neutral-100 border-2 border-neutral-100 px-8 py-8 m-auto mt-10 animate-fadeIn ${className}`}
    >
      <button
        onClick={reset}
        className="absolute top-2 right-2 p-2 rounded-full bg-neutral-100 text-neutral-800 font-bold border-2 border-neutral-50 hover:bg-neutral-800 hover:text-neutral-50 transition-colors transform active:scale-95 cursor-pointer"
      >
        <RiResetLeftLine />
      </button>
      <header className="px-6 py-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-normal text-center mb-4">
          Initial Value : {initialCount}
        </h2>
        <h2 ref={counterHTMLElement} className="text-2xl font-bold text-center mb-4 text-neutral-950 bg-neutral-100 rounded-full py-2.5 px-5">
          {count}
        </h2>
        <h2 className="text-2xl font-light text-center mb-4">
          Changes : {numberOfChanges}
        </h2>
      </header>
      <main className="flex justify-center gap-4">
        <button
          onClick={()=>incrementBy(1)}
          className="px-4 py-2 bg-primary-500 text-white font-bold rounded-md border-2 border-neutral-50 hover:bg-neutral-50 hover:text-neutral-950 transition-transform transform active:scale-95 cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={()=>decrementBy(1)}
          className="px-4 py-2 bg-primary-500 text-white font-bold rounded-md border-2 border-neutral-50 hover:bg-neutral-50 hover:text-neutral-950 transition-transform transform active:scale-95 cursor-pointer"
        >
          Decrement
        </button>
      </main>
    </section>
  );
};
