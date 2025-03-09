import { memo } from "react";

export const Header = memo(() => {
  return (
    <>
      <h1 className="text-2xl text-start w-full border-b py-3 border-neutral-100">
        React
      </h1>
    </>
  );
});
