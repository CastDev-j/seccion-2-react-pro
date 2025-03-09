import { Counter } from "./components/Counter";
import { Header } from "./components/shared/header/Header";

function App() {
  return (
    <>
      <Header />

      <article className="flex flex-wrap justify-center gap-4">
        <Counter initialCount={4} max={10} min={-10} className=""/>
        <Counter initialCount={3} max={10} min={-10} className="hidden md:block"/>
        <Counter initialCount={1} max={10} min={-10} className="hidden lg:block"/>
      </article>
    </>
  );
}

export default App;
