import chroma from "chroma-js";

let zdsBaseColors = [
  // "#64748B", // steel
  // "#71717A", // gray
  "#F43F5E", // rose
  "#EF4444", // red
  "#F97316", // orange
  "#F59E0B", // amber
  "#FACC15", // yellow
  "#84CC16", // lime
  "#22C55E", // green
  "#10B981", // emerald
  "#2DD4BF", // teal
  "#22D3EE", // cyan
  "#0EA5E9", // sky
  "#3B82F6", // blue
  "#6366F1", // indigo
  "#8B5CF6", // violet
  "#A855F7", // purple
  "#D946E4", // fuschia
  "#EC4899", // pink
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
  .domain([0,0.5,1]) // You can use the domain to set the exact positions of each color.
  .mode("hsl") // [hsl|hsv|lab|lch|lrgb]
  .gamma(1) // Gamma-correction can be used to "shift" a scale's center
  // .correctLightness(true) // This makes sure the lightness range is spread evenly across a color scale.
  .padding([0,0.15]) // trims the edges of the gradient, can take one value [or, two]
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