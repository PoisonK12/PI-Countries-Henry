import {Link} from 'react-router-dom'
import style from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div className={style.fullView}>
      <h1>Welcome to World Database</h1>
      <Link to={'/home'}>
        <button className={style.landingButton}>Enter</button>
      </Link>
    </div>
  )
}

export default LandingPage