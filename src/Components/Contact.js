import { useState } from "react";
import Footer from "./Footer";
import axios from "axios";

export default function Contact(props) {
  // setting form data states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    agree: false,
    gender: "",
    number: "",
  });

  // setting onChange function on each form element
  function onChange(e) {
    // destructering some elements form browser event destructering
    const { name, type, value, checked } = e.target;

    // determining setformData function
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }

  // setting handle SUbmit function
  function handleSubmit(e) {
    e.preventDefault();
    // const errorMessage = "please fill all the fieldss";
    // if (formData.agree && formData.fullName) {
    //   alert(`${formData.fullName} subscription successfully`);
    // } else {
    //   alert(errorMessage);
    // }
    axios
      .post(`http://localhost:3001/submit`, { Dt: formData })
      .then((response) => {
        console.log(response);
      });
    console.log("is clicked");
  }

  ////////////////////// TRYING APIS1////////////////////////////////////////////
  function getAllProduct() {
    axios.get("http://localhost:3001/api").then((res) => console.log(res));
  }
  ////////////////////// END TRYING APIS 1////////////////////////////////////////////

  return (
    <div
      className="container-fluid p-3 mb-2 "
      style={{
        background: props.colorMode ? "rgb(0, 10, 18)" : "rgb(48, 68, 99)",
        color: props.colorMode ? "rgb(60, 64, 68)" : "white",
      }}
    >
      <h1>Contact us opo</h1>
      {/* START APIS1  */}
      <button onClick={getAllProduct}>GetAllProduct</button>
      {/*END APIS1  */}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        quibusdam. Sint, quia ullam? Sequi eum suscipit culpa error vero
        exercitationem eaque dicta quis beatae ad nam veniam ratione, illum ea
        perferendis, ipsum dolor, repellat ipsa. Repudiandae rem aliquam cum!
        Aspernatur dolores laudantium ipsum quaerat quam voluptas ab enim?
        Aspernatur, bgender
      </p>
      <form
        onSubmit={handleSubmit}
        className="formContact"
        style={{
          background: props.colorMode ? "rgb(0, 10, 18)" : "rgb(16, 49, 99)",
          border: props.colorMode
            ? "3px solid rgb(1, 39, 61)"
            : "3px solid rgb(15, 154, 235)",
          marginBottom: "20px",
        }}
      >
        <h3
          className="text-center"
          style={{
            background: props.colorMode
              ? "rgb(1, 39, 61)"
              : "rgb(15, 154, 235)",
          }}
        >
          Fill this form for subscription
        </h3>
        {/* setting input boxes of text type */}
        <input
          type="text"
          value={formData.fullName}
          name="fullName"
          placeholder="full name"
          onChange={onChange}
          style={
            props.colorMode
              ? { background: "rgb(0, 10, 18)", color: "rgb(60, 64, 68)" }
              : { background: "rgb(48, 68, 99)", color: "white" }
          }
        />
        <br />
        <input
          type="email"
          value={formData.email}
          name="email"
          placeholder="email"
          onChange={onChange}
          style={
            props.colorMode
              ? { background: "rgb(0, 10, 18)", color: "rgb(60, 64, 68)" }
              : { background: "rgb(48, 68, 99)", color: "white" }
          }
        />
        <br />
        {/* phone number */}
        <input
          type="number"
          value={formData.number}
          name="number"
          placeholder="phone number"
          onChange={onChange}
          style={
            props.colorMode
              ? { background: "rgb(0, 10, 18)" }
              : { background: "rgb(48, 68, 99)" }
          }
        />
        <br />
        {/* setting input box for radio button */}
        <fieldset>
          <legend style={{ fontSize: "15px" }}>GENDER</legend>

          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={onChange}
          />
          <label htmlFor="male">Male</label>
          <br />

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={onChange}
          />
          <label htmlFor="female">Female</label>
          <br />

          <input
            type="radio"
            id="unspecify"
            name="gender"
            value="unspecify"
            checked={formData.gender === "unspecify"}
            onChange={onChange}
          />
          <label htmlFor="unspecify">Unspecify</label>
          <br />
        </fieldset>

        {/* setting input box for checkbox */}

        <div>
          <label htmlFor="agree" style={{ marginRight: "10px" }}>
            Subscribe to newsletter
          </label>
          <input
            type="checkbox"
            id="agree"
            checked={formData.agree}
            onChange={onChange}
            name="agree"
          />
        </div>
        {/* subscribe check box */}

        <br />
        <button
          className="btn-primary"
          style={{
            background: props.colorMode ? "rgb(0, 38, 59)" : "rgb(0, 82, 130)",
            color: props.colorMode ? "rgb(78, 83, 88)" : "white",
            border: "none",
            width: "100px",
            display: "flex",
            flexDirection: "column",
            margin: " 0 auto",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <b>
            {" "}
            <big> SUBMIT</big>
          </b>
        </button>
      </form>
      <Footer />
    </div>
  );
}
