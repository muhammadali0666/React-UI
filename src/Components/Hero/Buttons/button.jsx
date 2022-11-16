import "./button.css";


export const Buttons = (props) => {
  return (
    <>
      <button className="hero-btn">
        Cari Judul Buku{" "}
        <img src={props.img} alt="search" className="hero-btn-img" />
      </button>
    </>
  );
};
