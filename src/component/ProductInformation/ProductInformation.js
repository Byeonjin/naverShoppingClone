import "./ProductInformation.css";

import Container from "../Container/Container";
import productImage from "../../asset/product-image.png";
import getColor from "../../theme/utils";

function ProductInformation(porps) {
  return (
    <Container as="section" className={"productInformationContainer"}>
      <img src={productImage} alt="래피젠 상품 이미지" />
      <h2>래피젠 코로나 자가 검사 키트</h2>
      <h2>2개입X1박스</h2>
      <Container className={"priceInfo"}>
        <span
          aria-label={`할인률 ${porps.discountRate}%`}
          className="dCRate"
          style={{ color: getColor("secondary") }}
        >
          {porps.discountRate}%
        </span>
        <Container className={"priceContainer"}>
          <span
            aria-label={`할인 전 가격 ${porps.productPrice}원`}
            className="price"
            style={{ color: getColor("gray/300") }}
          >
            {porps.productPrice.toLocaleString("ko-KR")}원
          </span>
          <span
            aria-label={`할인 후 가격 ${porps.discountedPrice}원`}
            className="dCedPrice"
            style={{ color: getColor("gray/400") }}
          >
            {porps.discountedPrice.toLocaleString("ko-KR")}원
          </span>
        </Container>
      </Container>
    </Container>
  );
}

export default ProductInformation;
