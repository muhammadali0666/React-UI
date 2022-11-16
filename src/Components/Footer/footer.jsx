import Logo from "../../Assets/img/logo.png"
import Insta from "../../Assets/img/instagram.png"
import Facebook from "../../Assets/img/facebook.png"
import Youtube from "../../Assets/img/youtube.png"
import C from "../../Assets/img/c.png"
import "./footer.css"

export const Footer = () => {
  return(
    <section>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-box">
            <div className="footer-box-in">
              <div className="footer-in-box-img">
                <img src={Logo} alt="" className="footer-img" />
                <p className="footer-p">
                Pojok Baca Probolinggo
                </p>
              </div>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="https://instagram.com" className="footer-link">
                    <img src={Insta} alt="" className="footer-social" />
                  </a>
                </li>
                <li className="footer-item">
                  <a href="https://facebook.com" className="footer-link">
                    <img src={Facebook} alt="" className="footer-social" />
                  </a>
                </li>
                <li className="footer-item">
                  <a href="https://youtube.com" className="footer-link">
                    <img src={Youtube} alt="" className="footer-social" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="foote-box-next">
              <h4 className="footer-paragraph">
              Kontak
              </h4>
              <ul className="footer-next-list">
                <li className="footer-next-item">
                  <a href="#" className="footer-next-link">
                  Email
                  </a>
                </li>
                <li className="footer-next-item">
                  <a href="#" className="footer-next-link">
                  Alamat
                  </a>
                </li>
                <li className="footer-next-item">
                  <a href="#" className="footer-next-link">
                  No. Rekening
                  </a>
                </li>
              </ul>
            </div>
            <div className="foote-box-next">
              <h4 className="footer-paragraph">
              Tentang Kami
              </h4>
              <ul className="footer-next-list">
                <li className="footer-next-item">
                  <a href="#" className="footer-next-link">
                  Umum
                  </a>
                </li>
              </ul>
            </div>
            <div className="foote-box-next">
              <h4 className="footer-paragraph">
              Galery
              </h4>
              <ul className="footer-next-list">
                <li className="footer-next-item">
                  <a href="#" className="footer-next-link">
                  Kegiatan 2018
                  </a>
                </li>
                <li className="footer-next-item">
                  <a href="#" className="footer-next-link">
                  Kegiatan 2019
                  </a>
                </li>
                <li className="footer-next-item">
                  <a href="#" className="footer-next-link">
                  Kegiatan 2020
                  </a>
                </li>
                <li className="footer-next-item">
                  <a href="#" className="footer-next-link">
                  Kegiatan 2021
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <img src={C} alt="" className="footer-bottom-img" />
            <p className="footer-bottom-p">
            Pojok Baca Probolinggo 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}