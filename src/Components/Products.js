import { useState } from "react";

export default function Product(props) {
  // favourite onstar
  const onStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
  // favourite offStar
  const offStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
  );

  // determining read more state
  const [show, setShow] = useState(false);
  // setting favourite toggle
  const [isFavourite, setIsFavourite] = useState(false);
  const switchFav = () => setIsFavourite((prev) => !prev);
  const favImg = isFavourite ? onStar : offStar;

  return (
    <div className={`product my-1 m-1 p-0 position-relative  `}>
      <div className="card " style={{ width: "170px", height: "300px" }}>
        <div className="cardImg">
          <img
            src={props.phot}
            className="card-img-top"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            alt="product"
          />
        </div>
        <div
          className="card-body "
          style={{
            paddingBottom: "0rem",
            paddingRight: "0.5rem",
            background: props.coloMode ? "rgb(0, 10, 18)" : "rgb(48, 68, 99)",
          }}
        >
          <h5 className="card-title fs-6 m-0 p-0 ">Title : {props.title} </h5>
          {show && <p className="card-text m-0 p-0 ">Description: wait</p>}
          <p className="showDescr " onClick={() => setShow((prev) => !prev)}>
            <strong>{show ? "Hide" : "show more"}</strong>{" "}
          </p>{" "}
          <span>favourite : </span>{" "}
          <span>
            {" "}
            <span onClick={switchFav}>{favImg}</span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
