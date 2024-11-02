import { useContext } from "react";
import Cart from "./Cart";
import Products from "./Products";
import style from "./styles/main.module.css";

function Main() {
  return (
    <main className={style.main}>
      <section>
        <h1>Deserts</h1>
        <Products />
      </section>
      <Cart />
    </main>
  );
}

export default Main;
