/* eslint-disable react/prop-types */
import ActivityCard from "../ActivityCard/ActivityCard"
import style from "./ActivityContainer.module.css"

const ActivityContainer = ({ activities }) => {
  return (
    <div className={style.activityContainer}>
      {activities.map(({ name, difficulty, season, duration, countries }) => (
        <ActivityCard
          key={name} // Agrega un identificador único como clave
          name={name}
          difficulty={difficulty}
          season={season}
          duration={duration}
          countries={countries} />
      ))}
    </div>
  )
}

export default ActivityContainer