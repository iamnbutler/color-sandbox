import chroma from "chroma-js";

let zdsBaseColors = [
  "#EF4444", 
  "#0EA5E9",
  "#10B981",
  "#F97316",
  "#EAB308",
  "#22C55E",
  "#3B82F6",
  "#A855F7",
  "#EC4899",
];
let allColors = [];
let colorTiles = [];

function getColorRamp(baseColor, steps = 10) {
  // Get various color values from the base color
  let hsl = chroma(baseColor).hsl();
  let h = Math.round(hsl[0]);

  // Create light and dark colors using set saturation + luminosity values
  let lightColor = chroma.hsl(h, 0.88, 0.96).hex();
  let darkColor = chroma.hsl(h, 0.68, 0.32).hex();

  // Create a color ramp using the light and dark colors
  let ramp = chroma
  .scale([lightColor, baseColor, darkColor])
  .domain([0,0.25,1]) // You can use the domain to set the exact positions of each color.
  .mode("hsl") // [hsl|hsv|lab|lch|lrgb]
  .gamma(1.3) // Gamma-correction can be used to "shift" a scale's center
  .correctLightness(false) // This makes sure the lightness range is spread evenly across a color scale.
  .padding(0) // trims the edges of the gradient, can take one value [or, two]
  .colors(steps);

  return ramp;
}

// Build an array of all the color ramps
zdsBaseColors.forEach((baseColor) => {
  allColors.push(getColorRamp(baseColor));
});

// Loop through all the color ramps and create a column for each
allColors.flat().forEach((color,i = 0)=>{
    colorTiles.push( <div key={i} className="colorTile h-24 flex items-end justify-left font-mono text-neutral-800" style={{ backgroundColor: [color] }}><span className="p-2 text-neutral-700 mix-blend-multiply text-sm">{color}</span></div>)
})

function ColorColumn() {
    console.log(allColors.flat())

    return (
    <>
      <div className="colorGrid grid gap-px w-1/2 grid-cols-10 ">{colorTiles}</div>
    </>
  );
}

export default ColorColumn;