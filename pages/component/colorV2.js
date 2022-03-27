import chroma from "chroma-js";

// let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
// let itemList=[];

// items.forEach((item,index)=>{
//   itemList.push( <li key={index}>{item}</li>)
// })

let zdsBaseColors = ["#EF4444", "#0EA5E9"];
let allColors = [];

function getColorRamp(color, steps = 10) {
  // Get various color values from the base color
  let hsl = chroma(baseColor).hsl();
  let h = Math.round(hsl[0]);
  let s = Math.round(hsl[1]);
  let l = Math.round(hsl[2]);

  // Create light and dark colors using set saturation + luminosity values
  let lightColor = chroma.hsl(h, 0.84, 0.96).hex();
  let darkColor = chroma.hsl(h, 0.64, 0.2).hex();

  // Create a color ramp using the light and dark colors
  let ramp = chroma
  .scale([lightColor, baseColor, darkColor])
  .mode("lrgb")
  .colors(steps);

  return ramp;
}

// Build an array of all the color ramps
// Using the base colors in the zdsBaseColors array
zdsBaseColors.forEach((baseColor) => {
  allColors.push(getColorRamp(baseColor));
});

console.log(allColors);

// items.forEach((item, index) => {
//   itemList.push(<li key={index}>{item}</li>);
// });

function ColorGrid() {
  console.log(allColors);
  // return (
  //   <>
  //     <h2>This is a simple list of items</h2>
  //     <ul>{itemList}</ul>
  //   </>
  // );
}

export default ColorGrid;
