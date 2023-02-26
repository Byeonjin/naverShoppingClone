import "./PurchaseButton.css";
import React from "react";
import naverLogo from "../../asset/IconNaver.svg";
import naverLogoDisabled from "../../asset/IconNaver-disabled.svg";

import Container from "../Container/Container";

function PurchaseButton(props) {
  return (
    <Container className={"PurchaseBtn"}>
      <button disabled={props.disabled} className="purchaseBtn">
        <span className="p">
          <img
            src={!props.disabled ? naverLogo : naverLogoDisabled}
            className="logo"
            alt="네이버로고"
          />
          구매하기
        </span>
      </button>
    </Container>
  );
}

export default PurchaseButton;
