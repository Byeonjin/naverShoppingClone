import "./Counter.css";
import getColor from "../../theme/utils";

import PurchaseButton from "../PurchaseButton/PurchaseButton";
import Container from "../Container/Container";
import { useEffect, useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(0);
  let [btnActive, setbtnActive] = useState(true);

  const minusCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 0) {
      setbtnActive(true);
    } else {
      setbtnActive(false);
    }
  }, [count]);

  return (
    <>
      <Container as="section" className={"counterContainer"}>
        <button
          onClick={minusCount}
          style={{ color: getColor("gray/400") }}
          type="button"
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={plusCount}
          style={{ color: getColor("gray/400") }}
          type="button"
        >
          +
        </button>
      </Container>
      <Container as="section" className={"PurchaseSection"}>
        <span>총 상품 금액</span>
        <button>?</button>
        <span className="totalPriceInfo">
          <span style={{ color: getColor("gray/300") }}>총 수량 {count}개</span>
          <span style={{ color: getColor("secondary") }} className="totalPrice">
            {parseInt(props.price * count).toLocaleString("ko-KR")}원
          </span>
        </span>
      </Container>
      <PurchaseButton disabled={btnActive}></PurchaseButton>
    </>
  );
}

export default Counter;
