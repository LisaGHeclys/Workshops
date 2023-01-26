import "./index.css";
import Header from "./components/Header";
import HeroZone from "./components/HeroZone";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <div className="App overflow-y-scroll no-scrollbar">
            {/* <header className="">
                <Header />
            </header> */}
            <HeroZone />
            <Portfolio />
            <div className="h-screen">
                <h1 className="text-3xl font-bold">Clients</h1>
            </div>
            <div className="h-screen">
                <h1 className="text-3xl font-bold">Hello world!</h1>
            </div>
        </div>
    );
}

export default App;
