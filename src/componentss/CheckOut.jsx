import { useCartContext } from "./hooks/CartContext";
import style from "./styles/cta.module.css";
import styles from "./styles/checkout.module.css";

const CheckOut = () => {
  const { state, totalCost, isModalOpen, setIsModalOpen } = useCartContext();
  return (
    <section className={styles.checkout__bg}>
      <div className={styles.checkout}>
        <span className={styles.checkout__img}>
          <img src="/assets/images/icon-order-confirmed.svg" alt="" />
        </span>
        <div className={styles.checkout__title}>
          <h1>Order Conformed</h1>
          <p>We hope you enjoy your food!</p>
        </div>
        <div className={styles.checkout__items}>
          <ul className={styles.checkout__list}>
            {state.map((item) => {
              return (
                <li key={item.id} className={styles.checkout__item}>
                  <div className={styles.item__left}>
                    <div className={styles.item__img}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className={styles.item__desc}>
                      <h4 className={styles.item__name}>{item.name}</h4>
                      <div className={styles.item__info}>
                        <h5 className={styles.item__quantity}>
                          {item.quantity}x
                        </h5>
                        <h5 className={styles.item__price}>
                          ${item.price.toFixed(2)}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <h5 className={styles.item__total}>
                    {(item.quantity * item.price).toFixed(2)}
                  </h5>
                </li>
              );
            })}
          </ul>
          <div className={styles.checkout__total}>
            <span>Order Total</span>
            <h2>${totalCost.toFixed(2)}</h2>
          </div>
        </div>
        <button className={style.cta}>Start New Order</button>
      </div>
    </section>
  );
};
export default CheckOut;
