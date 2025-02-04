 import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: IProductCardProps): JSX.Element {
  return (
    <div className={styles.shopContainerCard} key={id}>
      <h4>{title}</h4>
      {/* <h4>{title.length < 30 ? title : title.slice(0, 20) + '...'}</h4> */}
      <p>Price: {price}€</p>
      <div className={styles.imgWrapper}>
        <img src={image} />
      </div>
      <Link to={String(id)}>To product</Link>
    </div>
  );
}