import { useDispatch } from "react-redux"
import { getCountrybyName } from '../../../redux/actions'
import { useState } from "react"
import style from './SearchBar.module.css'
import { setPage } from '../../../redux/actions';


const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountrybyName(name));
    setName("");
    dispatch(setPage(1));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.searchBar}>
        <input
          type="search"
          placeholder="Looking for...?"
          onChange={handleInput}
          value={name}
          className={style.searchInput}
        />
        <button type="submit" className={style.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;