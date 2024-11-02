import { useCartContext } from "./hooks/CartContext";
import { Cart } from "./Icons";
import style from "./styles/button.module.css";

function Button({ item }) {
  const { addItemToCart } = useCartContext();
  return (
    <button className={style.btn} onClick={() => addItemToCart(item)}>
      <Cart />
      <span>Add to Cart</span>
    </button>
  );
}

export default Button;
