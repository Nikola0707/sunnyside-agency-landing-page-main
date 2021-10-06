import "./App.css";
import { Link } from "react-scroll";

import NavBar from "./Components/NavBar/NavBar.component";
import Arrow from "./assets/icon-arrow-down.svg";
import MainContent from "./Components/MainContent/MainContent.component";
import Testimonials from "./Components/Testimonials/Testimonials.component";
import Images from "./Components/Images/Images.component";
import Footer from "./Components/Footer/Footer.component";
function App() {
  return (
    <div className="container">
      <header>
        <NavBar />
        <h1>WE ARE CREATIVES</h1>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1500}
        >
          <img src={Arrow} alt="arrow-down" />
        </Link>
      </header>
      <main>
        <MainContent />
        <Testimonials />
        <Images />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
