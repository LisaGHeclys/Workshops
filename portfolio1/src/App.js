import HeroZone from "./components/HeroZone";
import Portfolio from "./components/Portfolio";
import HireMe from "./components/HireMe";

import "./index.css";

function App() {
  return (
    <div className="App overflow-y-scroll no-scrollbar">
      <HeroZone />
      <Portfolio />
      <div className="h-screen">
        <h1 className="text-3xl font-bold">Clients</h1>
      </div>
      <div className="h-screen">
        <h1 className="text-3xl font-bold">Hello world!</h1>
      </div>
      <HireMe />
    </div>
  );
}

export default App;
