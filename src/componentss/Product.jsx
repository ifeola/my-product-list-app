import Button from "./Button";
import Counter from "./Counter";
import { useCartContext } from "./hooks/CartContext";
import style from "./styles/product.module.css";

const Product = ({ item, id }) => {
  const { isItemInCart, getCartItem } = useCartContext();

  return (
    <li className={style.product} key={id}>
      <div className={style.product__background}>
        <picture className={style.product__image}>
          {/*  Large screen: high-resolution image  */}
          <source srcSet={item.image.desktop} media="(min-width: 1024px)" />

          {/*  Medium screen: medium-resolution image  */}
          <source srcSet={item.image.tablet} media="(min-width: 768px)" />

          {/*  Small screen: low-resolution thumbnail  */}
          <img src={item.image.mobile} alt="Responsive Image" loading="lazy" />
        </picture>
        <div className={style.product__buttons}>
          {isItemInCart(item.id) || getCartItem(item.id)?.quantity ? (
            <Counter item={item} />
          ) : (
            <Button item={item} />
          )}
        </div>
      </div>
      <div className={style.product__content}>
        <span>{item.category}</span>
        <h4>{item.name}</h4>
        <h4>${item.price.toFixed(2)}</h4>
      </div>
    </li>
  );
};
export default Product;
