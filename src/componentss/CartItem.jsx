import { useCartContext } from "./hooks/CartContext";
import { Remove } from "./Icons";
import style from "./styles/cartItem.module.css";

function CartItem({ item, index }) {
  const { dispatch } = useCartContext();

  return (
    <li className={style.cart__item} key={index}>
      <div className={style.item__content}>
        <h3 className={style.item__title}>{item.name}</h3>
        <div className={style.item__desc}>
          <span className={style.item__unit}>{item.quantity}x</span>
          <h4 className={style.item__price}>@ ${item.price.toFixed(2)}</h4>
          <h4 className={style.item__total}>
            ${(item.quantity * item.price).toFixed(2)}
          </h4>
        </div>
      </div>
      <button
        className={style.item__btn}
        onClick={() => {
          dispatch({ type: "DELETE_ITEM", payload: item.id });
        }}>
        <Remove />
      </button>
    </li>
  );
}

export default CartItem;
