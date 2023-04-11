import a from "../assets/slide1.jpg";
import b from "../assets/slide2.jpg";
import c from "../assets/slide3.jpg";

export default function Slides() {
  return (
    <div className="w-100">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div style={{ height: "200px" }} className="carousel-inner">
          <div className="carousel-item active">
            <img src={a} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={b} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
