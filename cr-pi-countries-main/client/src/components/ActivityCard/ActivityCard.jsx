/* eslint-disable react/prop-types */
import style from './ActivityCard.module.css';

const ActivityCard = ({ name, difficulty, season, duration, countries }) => {
  return (
    <div className={style.activityCard}>
      <div className={style.cardHeader}>
        <h2>{name}</h2>
      </div>
      <div className={style.cardContent}>
        <div className={style.cardDetails}>
          <p className={style.difficulty}>Difficulty: {difficulty}</p>
          <p className={style.details}>{season}, Duration: {duration}</p>
          <h4 className={style.countries}>{countries}</h4>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;