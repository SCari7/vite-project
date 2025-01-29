interface Props {
  gears: number;
  brand: string;
  price: number;
  color: string;
}

export default function Bike(props: Props): JSX.Element {
  const { brand, gears, price, color } = props;
  return (
    <div style={{ backgroundColor: color, color: "brown" }}>
      Gears: {gears}, Brand: {brand}, Price: {price}, Color: {color}
    </div>
  );
}
