import CartItem from "./CartItem";
import Cta from "./Cta";
import { Carbon, Illustration } from "./Icons";
import style from "./styles/cart.module.css";
import { useCartContext } from "./hooks/CartContext";

function Cart() {
  const { totalQuantity, cartItems, totalCost } = useCartContext();

  return (
    <aside>
      <div className={style.cart}>
        <h2 className={style.cart__title}>Your Cart ({totalQuantity})</h2>
        {cartItems.length <= 0 ? (
          <div className={style.cart__inactive}>
            <Illustration />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <div className={style.cart__bg}>
            <ul className={style.cart__list}>
              {cartItems.map((item, index) => {
                return <CartItem item={item} id={index} key={index} />;
              })}
            </ul>
            <div className={style.cart__total}>
              <span>Order Total</span>
              <h2>${totalCost.toFixed(2)}</h2>
            </div>
            <div className={style.cart__carbon}>
              <Carbon />
              This is a <span>carbon-neutral</span> delivery
            </div>
            <Cta />
          </div>
        )}
      </div>
    </aside>
  );
}

export default Cart;
