import Guy from "../../Assets/img/guy.png"
import Simmon from "../../Assets/img/simmon.png"
import Point from "../../Assets/img/points.png"
import { Cards } from "./Card/card"
import "./card.css"

export const Card = () => {
  return(
    <section>
      <div className="container">
        <div className="card-inner">
          <div className="card-top">
          <div className="card-top-in">
          <h2 className="card-paragraph">
            Apa Kata Mereka?
            </h2>
            <p className="card-top-p">
            Mereka yang telah menjadi pengunjung tetap kami
            </p>
          </div>
          <p className="card-top-text">
          Selengkapnya
          </p>
          </div>

          <div className="card-box">
            <Cards text="32 Tahun, Karyawan" word="Guy Hawkins" img={Guy} name="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
            <Cards text="20 Tahun, Mahasiswa" word="Brooklyn Simmons" img={Simmon} name="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          </div>

          <img src={Point} alt="point" className="card-bottom-img" />

        </div>
      </div>
    </section>
  )
}