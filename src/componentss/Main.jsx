import Cart from "./Cart";
import CheckOut from "./CheckOut";
import { useCartContext } from "./hooks/CartContext";
import Products from "./Products";
import style from "./styles/main.module.css";

function Main() {
  const { isModalOpen, setIsModalOpen } = useCartContext(false);

  return (
    <>
      <main className={style.main}>
        <section>
          <h1>Deserts</h1>
          <Products />
        </section>
        <Cart />
        {<CheckOut />}
      </main>
    </>
  );
}

export default Main;
