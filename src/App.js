import "./App.css";
import NavBar from "./Components/NavBar/NavBar.component";
import Arrow from './assets/icon-arrow-down.svg'
import MainContent from "./Components/MainContent/MainContent.component";
function App() {
  return (
    <div className="container">
      <header>
        <NavBar />
        <h1>WE ARE CREATIVES</h1>
        <img src={Arrow} alt="arrow-down" />
      </header>
      <main>
        <MainContent />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
