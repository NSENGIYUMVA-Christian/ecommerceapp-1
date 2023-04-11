import Footer from "./Footer";
export default function About(props) {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        background: props.colorMode ? "rgb(0, 10, 18)" : "rgb(48, 68, 99)",
        color: props.colorMode ? "rgb(60, 64, 68)" : "white",
      }}
    >
      <h3 className="text-center">BUY WITH CHRIS FAQ SECTION</h3>

      <div
        className="aboutQuestAndAns"
        style={{
          background: props.colorMode ? "rgb(7, 5, 5)" : "rgb(16, 49, 99)",
        }}
      >
        <details>
          <summary>What is BUY WITH CHRIS</summary>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            sint quia iusto asperiores unde nobis animi labore qui ab
            voluptatem.
          </p>
        </details>
        <details>
          <summary>What is BUY WITH CHRIS</summary>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            sint quia iusto asperiores unde nobis animi labore qui ab
            voluptatem.
          </p>
        </details>
        <details>
          <summary>What is BUY WITH CHRIS</summary>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            sint quia iusto asperiores unde nobis animi labore qui ab
            voluptatem.
          </p>
        </details>
        <details>
          <summary>What is BUY WITH CHRIS</summary>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            sint quia iusto asperiores unde nobis animi labore qui ab
            voluptatem.
          </p>
        </details>
      </div>
      <Footer />
    </div>
  );
}
