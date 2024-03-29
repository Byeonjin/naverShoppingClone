import { tokens } from "./tokens";

const getColor = (colorNameAndVariant) => {
  if (colorNameAndVariant.includes("/")) {
    let [colorName, colorVariant] = colorNameAndVariant.split("/");
    return tokens.colors[colorName][colorVariant];
  } else {
    return tokens.colors[colorNameAndVariant];
  }
};

export default getColor;
