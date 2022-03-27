import chroma from 'chroma-js';

export default function colorRange(color) {
  let hsl = chroma(color).hsl();
  let h = Math.round(hsl[0]);
  let s = Math.round(hsl[1]);
  let l = Math.round(hsl[2]);
  let lightColor = chroma.hsl(h, 0.84, 0.96).hex();
  let darkColor = chroma.hsl(h, 0.64, 0.20).hex();

  let values = {
    [color]: {
      value: color,
      lightColor: lightColor,
      darkColor: darkColor,
      ramp: chroma.scale([lightColor, color, darkColor]).mode('lrgb').colors(10),
      hsl: hsl,
      h: h,
      s: s,
      l: l,
    },
  };

  let ramp = chroma.scale([lightColor, color, darkColor]).mode('lrgb').colors(10);

  return ramp;
}