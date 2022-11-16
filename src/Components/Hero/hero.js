import HeroImg from "../../Assets/img/all.png"
import { Buttons } from "./Buttons/button.jsx"
import "./hero.css"
import Search from "../../Assets/img/search.png";
import Health from "../../Assets/img/health.png";

export const Hero = () => {
  return(
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <p className="hero-p">
          <span className="hero-span">Pojok Baca</span> Probolinggo
          </p>
          <h2 className="hero-paragraph">
          Pinjam Buku Secara <span className="hero-span">Gratis</span> untuk Masyarakat
          </h2>
          <div className="hero-box">
          <Buttons img={Search}/>
          <Buttons img={Health}/>
          </div>
          <img src={HeroImg} alt="all" className="hero-img" />
        </div>
      </div>
    </div>
  )
}