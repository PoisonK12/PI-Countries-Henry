import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getCountryById } from '../../redux/actions';
import style from './DetailPage.module.css';

const DetailPage = () => {
  const { ids } = useParams();
  const dispatch = useDispatch();
  const { id, name, flags, continent, capital, subregion, area, population } = useSelector((state) => state?.countryId);

  useEffect(() => {
    dispatch(getCountryById(ids));
  }, [dispatch, ids]);

  return (
    <div className={style.detailContainer} key={id}>
      <Link to='/home'>
        <button className={style.roundHouse}>🏡</button>
      </Link>
      <div className={style.homeLike}>
        <h1 className={style.countryName}>{name}</h1>
        <div className={style.flagImage}>
          <img src={flags} alt={name} />
        </div>
        <div className={style.info}>
          <div className={style.continent}>
            <h3>
              <ruby className={style.ruby}>
                {continent} <rt className={style.rt}>Continent</rt>
              </ruby>
            </h3>
          </div>
          <div className={style.subregion}>
            <h4>
              <ruby className={style.ruby}>
                {subregion} <rt className={style.rt}>Sub-region</rt>
              </ruby>
            </h4>
          </div>
          <div className={style.capital}>
            <h4>
              <ruby className={style.ruby}>
                {capital} <rt className={style.rt}>Capital</rt>
              </ruby>
            </h4>
          </div>
          <div className={style.surface}>
            <h4>
              <ruby className={style.ruby}>
                {`${area}km²`} <rt className={style.rt}>Surface</rt>
              </ruby>
            </h4>
          </div>
          <div className={style.population}>
            <h3>
              <ruby className={style.ruby}>
                {population} <rt className={style.rt}>Population</rt>
              </ruby>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
