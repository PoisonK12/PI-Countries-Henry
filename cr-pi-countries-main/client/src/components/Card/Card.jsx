import { Link } from 'react-router-dom';
import style from './Card.module.css'

// eslint-disable-next-line react/prop-types
const Card = ({ id, name, flags, continent, population }) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${id}`}>
        <div className={style.cardHeader}>
          <h2>{name}</h2>
        </div>
        <div className={style.cardContent}>
          <img src={flags} alt={name} />
          <div className={style.cardDetails}>
            <h3>
              <ruby className={style.rubyCard}>
                {continent} <rt className={style.rtCard}>Continent</rt>
              </ruby>
            </h3>
            <p>
              <ruby className={style.rubyCard}>
                {population} <rt className={style.rtCard}>Population</rt>
              </ruby>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;