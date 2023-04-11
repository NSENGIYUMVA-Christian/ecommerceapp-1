import Product from "./Products";
import Slides from "./Slides";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";

export default function Home(props) {
  // setting states to reveive API data
  const [produ, setProdu] = useState([]);

  // home content
  let para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam sit vitae labore quis eaque facilis temporibus. Deleniti nulla libero ullam deserunt, aliquam itaque asperiores placeat porro, dolores, nihil pariatur omnis autem maxime. Itaque commodi vel magni in nobis? Voluptatem dignissimos minima quis! Fuga ipsa nam, alias praesentium velit nostrum accusamus exercitationem placeat doloribus voluptatibus magni sapiente magnam aperiam tempore ab nemo, voluptatem illum dolore quo recusandae. Voluptas voluptate numquam, mollitia suscipit est architecto, repellat fugiat odio sapiente totam minus fugit illo dolor dolore ex doloremque cumque. Veritatis nesciunt vel totam fuga aperiam possimus pariatur. Provident deleniti qui autem temporibus eveniet aspernatur in rem obcaecati, libero earum, voluptas saepe odit assumenda molestias aut corrupti architecto officiis ipsa quaerat neque. Corrupti consequatur, repellat quisquam incidunt labore nobis qui cumque molestiae atque porro ab dolorum blanditiis voluptatem numquam minima nostrum. Esse saepe, unde repellat quam asperiores repudiandae! Itaque iusto dolores aliquid facere quam, cum sequi doloremque amet officia. Delectus libero ipsa facere voluptate corporis quos, quo incidunt blanditiis voluptates temporibus nulla laboriosam, numquam inventore nam obcaecati, sunt magnam quibusdam autem dolorem fugit odit maxime iste accusamus. Nemo, nostrum. Pariatur reiciendis molestias voluptates a quia, adipisci at quasi incidunt laboriosam aperiam, velit tempore?`;

  // fetching data from API
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setProdu(data.data.memes);
    }
    getData();
  }, []);

  //getting product content from api and sendimg em as props to product component
  const product = produ.map((p) => {
    return <Product title={p.name} phot={p.url} coloMode={props.colorMode} />;
  });

  return (
    <div>
      <Slides />
      <div
        className="home container-fluid"
        style={{
          background: props.colorMode ? "rgb(0, 10, 18)" : "rgb(48, 68, 99)",
          color: props.colorMode ? "rgb(60, 64, 68)" : "white",
        }}
      >
        <h1 className="text-center">Welcome to BUY WITH CHRIS</h1>
        <p className="fw-normal para1">{para}</p>
        <h2 className="text-center">Our products</h2>
        <div className="productContainer  ">{product}</div>
        <h2 className="text-center">Product 2</h2>
        <p className="fw-normal">{para}</p>
        <div className="productContainer  ">{product}</div>
        <h2 className="text-center">Product 3</h2>
        <p className="fw-normal">{para}</p>
        <div className="productContainer  ">{product}</div>
        <p className="fw-normal">{para}</p>
        <h2 className="text-center">Product 4</h2>
        <p className="fw-normal">{para}</p>
        <div className="productContainer  ">{product}</div>
        <p className="fw-normal">{para}</p>
        <Footer />
      </div>
    </div>
  );
}
