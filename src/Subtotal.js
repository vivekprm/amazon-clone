import React from "react";
import "./Subtotal.css";
import CurrenyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal(props) {
  const [{ basket }] = useStateValue();
  console.log(basket);
  let total = 0;
  basket.forEach((item) => {
    total += item.price;
  });
  return (
    <div className="subtotal">
      <CurrenyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
