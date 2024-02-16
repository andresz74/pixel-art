import React from "react";
import { Pixels } from '../../components';

export const ColorContext = React.createContext({
  color: "lightGrey",
  setColor: (color: string) => {},
});

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setColor } = React.useContext(ColorContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        />
      ))}
    </div>
  );
}

const PixelArt = () => {
  const [color, setColor] = React.useState("lightGrey");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <div>
        <ColorPicker />
        <Pixels />
      </div>
    </ColorContext.Provider>
  );
};

export { PixelArt };
