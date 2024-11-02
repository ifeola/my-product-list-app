import { ProductsContext } from "./componentss/hooks/CartContext";
import Main from "./componentss/Main";

function App() {
  return (
    <>
      <ProductsContext>
        <Main />
      </ProductsContext>
    </>
  );
}

export default App;
