import Container from "../Container/Container";
import "./shippingInformation.css";
import getColor from "../../theme/utils";

function ShippingInformation() {
  return (
    <Container as="section" className={"shippingInfoContainer"}>
      <span style={{ color: getColor("gray/400") }}>택배배송</span>
      <span className="splitLine" style={{ color: getColor("gray/400") }}>
        3,000원
      </span>
      <span style={{ color: getColor("secondary") }}>(주문시 결제)</span>
      <p style={{ color: getColor("gray/300") }}>10개마다 부과</p>
    </Container>
  );
}

export default ShippingInformation;
