import { useSelector } from "react-redux";
import "./index.css";

const BillCard = () => {
  const cartProducts = useSelector((state) => state.cart);
  let total = 0;
  cartProducts.forEach((product) => {
    total += product.qty * product.newPrice;
  });

  return (
    <div className="bill-card-container">
      <h2>Price Details</h2>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id} className="bill-item">
            <p>
              {product.name} ({product.qty})item
            </p>
            <span>₹ {product.qty * product.newPrice}</span>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <p>Total</p>
        <span>₹ {total}</span>
      </div>
      <button type="button" className="bill-checkout-button">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default BillCard;
