import Car from "./Car";
import OIP from "./img/OIP.jpg"
  
export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>

      <h2>Cars</h2>

      <Car brand="mersedes" color="black" />
      <Car brand="bmw" color="grey" />
      <Car brand="audi" color="red" />
      <Car brand="tesla" color="black" />
      <Car brand="opel" color="green" />
      <h1>Первый способ подгрузить img</h1>
      <img src={OIP} alt="cars" />
      <h1>Второй способ загрузки фото</h1>
     <img src="R.jpg" alt="" />
    </div>
  );
}
