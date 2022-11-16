import "./card.css";

export const Cards = (props) => {
  return (
    <>
      <div className="card-left">
        <p className="card-p">
          {props.name}
        </p>
        <div className="card-mini">
          <img src={props.img} alt="" className="card-imgs" width={80} height={80} />
          <div className="card-mini-right">
            <p className="card-right-p">{props.word}</p>
            <p className="card-right-text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
