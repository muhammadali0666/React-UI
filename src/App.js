import "./App.css";
import { Header } from "./Components/Header/header";
import { Hero } from "./Components/Hero/hero";
import { Team } from "./Components/Team/team";
import { Proggress } from "./Components/Progress/progres.jsx";
import { Card } from "./Components/Card/card.jsx";
import { Slider } from "./Components/Slider/slider.jsx";
import { Social } from "./Components/Social/social";
import { Footer } from "./Components/Footer/footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Error} from "./Components/Error/error"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/team" element={<Team />} />
          <Route path="/progress" element={<Proggress />} />
          <Route path="/card" element={<Card />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/social" element={<Social />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
