import chroma from "chroma-js";

let zdsBaseColors = ["#EF4444", "#0EA5E9"];
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
let allColors = [];
let colorColumn = [];
let colorTiles = [];

function getColorRamp(baseColor, steps = 10) {
  // Get various color values from the base color
  let hsl = chroma(baseColor).hsl();
  let h = Math.round(hsl[0]);

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
zdsBaseColors.forEach((baseColor) => {
  allColors.push(getColorRamp(baseColor));
});

// Loop through all the color ramps and create a column for each
allColors.forEach((colorFamily,i = 0)=>{
  colorFamily.forEach((color,y = 0)=>{
    colorTiles.push( <div key={y+10} className="colorTile w-32 h-16 flex items-center justify-center" style={{ backgroundColor: [color] }}>{color}</div>)
  })

  colorColumn.push( <ul key={i++} className="colorColumn flex">{colorTiles}</ul>)
})

function ColorColumn() {
    console.log(allColors)
    console.log(colorColumn)
    console.log(colorTiles)

    return (
    <>
      <h2>This is a simple list of items</h2>
      <div>{colorColumn}</div>
    </>
  );
}

function ColorGrid() {
  // return (
  //   <>
  //     <h2>This is a simple list of items</h2>
  //     <ul>{itemList}</ul>
  //   </>
  // );
}

export default ColorColumn;