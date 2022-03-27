var i = 0;

const colorChip = ({colors}) => (
  <>
    {colors.map(color => (
      <div key={i++} className='color w-32 h-16 flex items-center justify-center' style={{backgroundColor: [color]}}>{color}</div>
    ))}
  </>
);

export default colorChip;