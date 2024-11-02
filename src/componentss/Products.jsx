import styles from "./styles/products.module.css";
import Product from "./Product";
import { useCartContext } from "./hooks/CartContext";

function Products() {
  const { products } = useCartContext();

  return (
    <ul className={styles.products}>
      {products.map((item, index) => {
        return <Product item={item} id={index} key={item.id} />;
      })}
    </ul>
  );
}

export default Products;
