import "./card.css"

export const Teams = (props) => {
  return (
    <>
    <div className="team-left">
              <p className="team-left-p">
                {props.text}
              </p>
              <div className="team-card">
                <img src={props.img} alt="" className="team-card-img" />
                <div className="team-card-box">
                  <p className="team-card-p">{props.write}</p>
                  <p className="team-card-text">
                    {props.word}
                  </p>
                </div>
              </div>
            </div>
    </>
  )
}