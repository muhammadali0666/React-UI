import Progress from "../../Assets/img/progress.png"
import "./progress.css"
import { Result } from "./Result/result"

export const Proggress = () => {
  return (
    <section>
      <div className="container">
        <div className="progress-inner">
          <Result img={Progress} name="500+" word="Judul Buku"/>
          <Result img={Progress} name="$0" word="Gratis Peminjaman"/>
          <Result img={Progress} name="5" word="Kegiatan Rutin"/>
        </div>
      </div>
    </section>
  )
}