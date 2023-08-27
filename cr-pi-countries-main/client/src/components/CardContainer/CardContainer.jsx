/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import style from './CardContainer.module.css';

const CardContainer = ({ countries }) => {
  return (
    <div className={style.cardContainer}>
      {countries.map(({ id, name, flags, continent, capital, subregion, area, population }) => (
        <Card
          key={id}
          id={id}
          name={name}
          flags={flags}
          continent={continent}
          capital={capital}
          subregion={subregion}
          area={area}
          population={population}
        />
      ))}
    </div>
  );
};

export default CardContainer;