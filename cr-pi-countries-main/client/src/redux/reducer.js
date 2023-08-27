/* eslint-disable no-case-declarations */
import {
  GET_COUNTRIES,
  GET_COUNTRY_ID,
  GET_COUNTRY_NAME,
  FILTER_CONTINENT,
  SORT_AZ,
  POPULATION_FILTER,
  POST_ACTIVITY,
  FILTER_ACTIVITY,
  GET_ACTIVITIES,
  SET_PAGE
} from './action-types'

const initialState = {
  allCountries: [],
  countries: [],
  countryId: {},
  allActivities: [],
  activities: [],
  loading: true,
  currentPage: 1,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        loading: false,
        allCountries: action.payload,
        countries: action.payload
      }
    case GET_ACTIVITIES:
      return {
        ...state,
        loading: false,
        allActivities: action.payload,
        activities: action.payload
      }

    case GET_COUNTRY_ID:
      return {
        ...state,
        loading: false,
        countryId: action.payload
      }

    case GET_COUNTRY_NAME:
      return {
        ...state,
        loading: false,
        allCountries: action.payload
      }

    case FILTER_CONTINENT:
      const allCountries = state.countries;
      const continentFilter =
        action.payload === "All"
          ? allCountries
          : allCountries.filter(
            (elem) => elem.continent === action.payload
          );
      return {
        ...state,
        loading: false,
        allCountries: continentFilter
      };

    case SORT_AZ:
      const sortedArr =
        action.payload === "sortAz"
          ? state.allCountries.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          })
          : state.allCountries.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        allCountries: sortedArr,
      };

    case POPULATION_FILTER:
      const sortedArrPop =
        action.payload === "asc"
          ? state.allCountries.sort((a, b) => {
            if (a.population > b.population) {
              return 1;
            }
            if (b.population > a.population) {
              return -1;
            }
            return 0;
          })
          : state.allCountries.sort((a, b) => {
            if (a.population > b.population) {
              return -1;
            }
            if (b.population > a.population) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        allCountries: sortedArrPop,
      };

    case POST_ACTIVITY:
      return {
        ...state
      };
    case FILTER_ACTIVITY:
      const countries = state.countries;
      const activityFilter =
        action.payload === "All"
          ? countries
          : countries.filter(
            (elem) =>
              elem.activities &&
              elem.activities.find((activity) => activity.name === action.payload)
          );
      return {
        ...state,
        allCountries: activityFilter,
      };
      case SET_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };

    default:
      return state;
  }
}

export default rootReducer