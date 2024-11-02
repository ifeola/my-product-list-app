import { useCartContext } from "./hooks/CartContext";
import { Decrement, Increment } from "./Icons";
import style from "./styles/counter.module.css";

function Counter({ item }) {
  const { incrementQuantity, decrementQuantity, getCartItem } =
    useCartContext();

  return (
    <div className={style.counter}>
      <button
        className={style.counter__btn}
        onClick={() => decrementQuantity(item.id)}>
        <Decrement />
      </button>
      <span>{getCartItem(item.id).quantity}</span>
      <button
        className={style.counter__btn}
        onClick={() => incrementQuantity(item.id)}>
        <Increment />
      </button>
    </div>
  );
}

export default Counter;
