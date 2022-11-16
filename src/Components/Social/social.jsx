import "./social.css"
import Healths from "../../Assets/img/healths.png"
import Whatsap from "../../Assets/img/whatsap.png"

export const Social = () => {
  return (
    <section>
      <div className="container">
        <div className="social-inner">
          <h2 className="social-paragraph">
          Ingin <span className="social-span">Membanu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?
          </h2>
          <p className="social-text">
          Percayakan melalui kegiatan kita
          </p>
          <button className="social-button">
          Donasi dengan Kami <img src={Healths} alt="img" className="social-img" />
          </button>
          <p className="social-spans">
         Atu
          </p>
          <button className="social-button">
          Hubungi Kami <img src={Whatsap} alt="img" className="social-img" />
          </button>
        </div>
      </div>
    </section>
  )
}