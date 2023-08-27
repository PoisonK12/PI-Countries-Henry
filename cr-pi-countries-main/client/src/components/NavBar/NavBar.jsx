import {Link} from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'
import style from './NavBar.module.css'
import { useLocation } from 'react-router-dom'


const NavBar = () => {
  const location = useLocation()
  const isDetail = location.pathname.includes('/detail/')
  const isCreate = location.pathname === '/create'
  return (
    <div className={style.container}>
      <Link to='/home'><span className={style.title}>World Database</span></Link>
      {!isCreate && <Link to='/create'><button className={style.form}>Create</button></Link>}
      {!isDetail && !isCreate && <SearchBar/>}
    </div>
  )
}

export default NavBar