import React from "react";
import { ColorContext } from "../../components";

const Pixel = () => {
  const { color } = React.useContext(ColorContext);
  const [pixelColor, setPixelColor] = React.useState("lightGrey");
  return (
    <div
      onClick={() => setPixelColor(color)}
      style={{
        height: "30px",
        width: "30px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
    />
  );
};
export { Pixel };
