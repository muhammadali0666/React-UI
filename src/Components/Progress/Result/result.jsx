import "./result.css";

export const Result = (props) => {
  return (
    <>
      <div className="progress-box">
        <img src={props.img} alt="img" className="progress-img" width={80} height={80} />
        <div className="progress-box-in">
          <p className="progress-p">{props.name}</p>
          <p className="progress-text">{props.word}</p>
        </div>
      </div>
    </>
  );
};
