import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Qualification } from "./components/Qualification";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Scrollup } from "./components/Scrollup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Qualification />
      <Contact />
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
