import { useCartContext } from "./hooks/CartContext";
import { Cart } from "./Icons";
import style from "./styles/button.module.css";

function Button({ item }) {
  const { dispatch } = useCartContext();
  return (
    <button
      className={style.btn}
      onClick={() =>
        dispatch({
          type: "ADD_ITEM_TO_CART",
          payload: {
            name: item.name,
            id: item.id,
            image: item.image.thumbnail,
            price: item.price,
            quantity: 1,
          },
        })
      }>
      <Cart />
      <span>Add to Cart</span>
    </button>
  );
}

export default Button;
