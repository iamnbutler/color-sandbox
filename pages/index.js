import chroma from "chroma-js";
import React from "react";
import { colorColumn } from "./component/colorTile";
import NoSSR from "./component/noSSR";

let zdsColors = [
  { name: "red", value: "#EF4444" },
  { name: "sky", value: "#0EA5E9" }
];

let moreColors = [
  { name: "red", value: "#EF4444" },
  { name: "sky", value: "#0EA5E9" },
  { name: "emerald", value: "#10B981" },
  { name: "orange", value: "#F97316" },
  { name: "yellow", value: "#EAB308" },
  { name: "green", value: "#22C55E" },
  { name: "blue", value: "#3B82F6" },
  { name: "purple", value: "#A855F7" },
  { name: "pink", value: "#EC4899" },
];

var allColors = [];

// Get the array of colors
function ColorGrid(colors) {
  // For each color, get it's base value and name
  colors.forEach((colorToken) => {
    let baseColor = colorToken.value;
    let colorName = colorToken.name;

    // Get various color values from the base color
    let hsl = chroma(baseColor).hsl();
    let h = Math.round(hsl[0]);
    let s = Math.round(hsl[1]);
    let l = Math.round(hsl[2]);

    // Create light and dark colors using set saturation + luminosity values
    let lightColor = chroma.hsl(h, 0.84, 0.96).hex();
    let darkColor = chroma.hsl(h, 0.64, 0.2).hex();

    // Create a color ramp using the light and dark colors
    let rampColors = chroma
      .scale([lightColor, baseColor, darkColor])
      .mode("lrgb")
      .colors(10);

    allColors.push(rampColors);
  });
  return allColors;
}

ColorGrid(zdsColors);

export default function Home() {
  // let colorGrid = ColorGrid(zdsColors);
  let tile = colorColumn(ColorGrid(zdsColors));
  // console.log(colorTile('#34D399'))

  // console.log(zdsColors)
  return <div className="min-w-full min-h-screen"><NoSSR>{tile}</NoSSR></div>;
}
