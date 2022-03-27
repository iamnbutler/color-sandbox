export function colorTile(color, i) {
  return (
    <div
      key={i}
      className="color w-32 h-16 flex items-center justify-center"
      style={{ backgroundColor: [color] }}
    >
      {color}
    </div>
  );
}

export function colorColumn(colors) {
  let i = 0;
  let len = colors.length;

  const colorItems = colors.map((color) => colorTile(color, i++));
  // colors.forEach(color => console.log(color[0]));

  for (i = 0; i < len; i++) {
    console.log(colors[i]);
  }

  return <div>{colorItems}</div>;
}

export function colorGrid(colorSets) {
  let x = 0;

  const colorSetItems = colorSets.map((colors) => colorTile(colors, x++));

  return <div className="flex">{colorSetItems}</div>;
}

export function colorTile(color, i) {
  return (
    <div key={i} className="colorGrid flex">
      {/* For each color */}
      <div key={x} className="colorColumn flex-col">
        {/* For each value */}
        <div key={x} className="colorTile w-32 h-16 flex items-center justify-center">
          {color}
        </div>
      </div>
    </div>
  );
}
