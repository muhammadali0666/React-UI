import Hatta from "../../Assets/img/hatta.png"
import Shihab from "../../Assets/img/shihab.png"
import "./team.css"
import { Teams } from "./Card/card";

export const Team = () => {
  return (
    <section>
      <div className="container">
        <div className="team-inner">
          <p className="team-p">
            Kenapa Kita <span className="hero-span">Harus</span> Membaca Buku?
          </p>
          <div className="team-box">
            <Teams word="Wakil Presiden Indonesia Pertama" img={Hatta} text='“Aku rela dipenjara asalkan <span bersama buku, karena dengan buku aku bebas”' write="Mohammad Hatta"/>
            <Teams word="Duta Membaca" img={Shihab} text="“Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta!" write="Najwa Shihab"/>
          </div>
        </div>
      </div>
    </section>
  );
};
