import Sliderone from "../../Assets/img/slider-one.png"
import Slidertwo from "../../Assets/img/slider-two.png"
import Sliderthree from "../../Assets/img/slider-three.png"
import "./slider.css"

export const Slider = () => {
  return (
    <section>
      <div className="container">
        <div className="slider-inner">
          <div className="slider-top">
            <div className="slider-top-inner">
              <p className="slider-p">
              Kegiatan Pojok Baca Probolinggo
              </p>
              <p className="slider-text">
              Intip kegiatan yang telah kami selenggarakan 
              </p>
            </div>
            <p className="slider-end-p">
            Selengkapnya
            </p>
          </div>

          <div className="slider-box">
            <img src={Sliderone} alt="slider" className="slider-img" />
            <img src={Slidertwo} alt="slider" className="slider-img" />
            <img src={Sliderthree} alt="slider" className="slider-img" />
          </div>
        </div>
      </div>
    </section>
  )
}