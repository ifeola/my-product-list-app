import { useCartContext } from "./hooks/CartContext";
import style from "./styles/cta.module.css";

export default function Cta() {
  const { isModalOpen, setIsModalOpen } = useCartContext();

  return (
    <button
      className={style.cta}
      type="button"
      onClick={() => setIsModalOpen(!isModalOpen)}>
      Confirm Order
    </button>
  );
}
