import "./App.css";
import ProductInformation from "../ProductInformation/ProductInformation";
import ShippingInformation from "../shippingInformation/shippingInformation";
import Counter from "../Counter/Counter";

function App() {
  const discountRate = 88;
  const productPrice = 56760;
  const discountedPrice = parseInt((productPrice * (100 - discountRate)) / 100);
  return (
    <div className="App">
      <ProductInformation
        discountRate={discountRate}
        productPrice={productPrice}
        discountedPrice={discountedPrice}
      />
      <ShippingInformation />
      <Counter price={discountedPrice} />
    </div>
  );
}

export default App;
