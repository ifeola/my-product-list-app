import style from "./styles/cta.module.css";

export default function Cta() {
  return (
    <button className={style.cta} type="button">
      Confirm Order
    </button>
  );
}
