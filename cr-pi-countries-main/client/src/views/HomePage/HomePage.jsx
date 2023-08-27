/* eslint-disable no-unused-vars */
import CardContainer from '../../components/CardContainer/CardContainer'
import ActivityContainer from '../../components/ActivityContainer/ActivityContainer'
import { useEffect, useState } from 'react'
import { getAllCountries, filterByContinent, orderByName, orderByPopulation, orderByActivity, getAllActivities } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../components/Pagination/Pagination'
import Loading from "../../components/Loading/Loading"
import style from "./HomePage.module.css"

const HomePage = () => {
  const countries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.allActivities)
  const [currentPage, setCurrentPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [countriesPerPage, setCountriesPerPage] = useState(10)
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getAllActivities())
  }, [dispatch])

  const handleReset = (event) => {
    event.preventDefault()
    dispatch(getAllCountries())
  }

  const handleFilterContinent = (event) => {
    dispatch(filterByContinent(event.target.value))
    setCurrentPage(1)
  }

  const handleFilterActivity = (event) => {
    dispatch(orderByActivity(event.target.value));
    setCurrentPage(1);
  }

  const [order, setOrder] = useState("");
  const handleFilterName = (event) => {
    event.preventDefault()
    dispatch(orderByName(event.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${event.target.value}`)
  }

  const [orderPop, setOrderPop] = useState('')
  const handleFilterPopulation = (event) => {
    dispatch(orderByPopulation(event.target.value))
    setCurrentPage(1)
    setOrderPop(`Ordenado ${event.target.value}`);
  }

  const [activeTab, setActiveTab] = useState('countries')
  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div className={style.home}>

      <div className={style.tabButtons}>
        <button onClick={() => handleTabClick('countries')}>Countries</button>
        <button onClick={() => handleTabClick('activities')}>Activities</button>
      </div>

      {activeTab === 'countries' && <div>
      <hr />
      <div className={style.filterContainer}>

        <label>Population: </label>
        <select onChange={(event) => handleFilterPopulation(event)} className={style.filterSelect}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>

        <label>Alphabetical: </label>
        <select onChange={(event) => handleFilterName(event)} className={style.filterSelect}>
          <option value='sortAz'>A to Z</option>
          <option value='sortZa'>Z to A</option>
        </select>

        <label>Continent: </label>
        <select onChange={(event) => handleFilterContinent(event)} className={style.filterSelect}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>

        <label>Activities: </label>
        <select onChange={(event) => handleFilterActivity(event)} className={style.filterSelect}>
          <option value="All">All activities</option>
          {activities.map((act) => (
            <option value={act.name} key={act.id}>
              {act.name}
            </option>
          ))}
        </select>

      </div> <br />
      <button onClick={handleReset} className={style.buttonReset}>Reset All</button>
      <hr />


     

        {loading ? <Loading /> : <CardContainer countries={currentCountries} />}
       <hr />
        <Pagination countriesPerPage={countriesPerPage} countries={countries.length}
          paginado={paginado} currentPage={currentPage} /> <hr /></div>}

      {activeTab === 'activities' && <div>
        <hr />
        {<ActivityContainer activities={activities} />}
      </div>}
    </div>

  )
}

export default HomePage