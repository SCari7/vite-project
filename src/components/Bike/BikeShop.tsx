import Bike from "./Bike";

export default function BikeShop(): JSX.Element {
  return (
    <div>
      <h1>best bicycle brands</h1>
      <Bike brand="Trek Bikes" color="gray" gears={20} price={33000} />
      <Bike brand="Cannondale" color="green" gears={28} price={40} />
      <Bike brand="Santa Cruz" color="pinc" gears={14} price={18000} />
      <Bike
        brand="Marin Bikes"
        color="white"
        gears={16}
        price={23000}
      />
    </div>
  );
}
