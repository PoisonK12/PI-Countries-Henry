import axios from 'axios'

import {
  GET_COUNTRIES,
  GET_COUNTRY_ID,
  GET_COUNTRY_NAME,
  FILTER_CONTINENT,
  LOADING,
  SORT_AZ,
  POPULATION_FILTER,
  POST_ACTIVITY,
  FILTER_ACTIVITY,
  GET_ACTIVITIES,
  SET_PAGE
} from './action-types'

const url = 'http://localhost:3001'

export const getAllCountries = () => async (dispatch) => {
  dispatch({ type: LOADING })
  let { data } = await axios.get(`${url}/countries`)
  return dispatch({
    type: GET_COUNTRIES,
    payload: data
  })
}

export const getAllActivities = () => async (dispatch) => {
  dispatch({type: LOADING})
  let {data} = await axios.get(`${url}/activities`)
  return dispatch({
    type: GET_ACTIVITIES,
    payload: data
  })
}
export const getCountryById = (id) => async (dispatch) => {
  dispatch({ type: LOADING })
  const { data } = await axios.get(`${url}/countries/${id}`)
  return dispatch({
    type: GET_COUNTRY_ID,
    payload: data,
  })
}

export const getCountrybyName = (name) => async (dispatch) => {
  dispatch({ type: LOADING })
  const { data } = await axios.get(`${url}/countries?name=${name}`);
  return dispatch({
    type: GET_COUNTRY_NAME,
    payload: data
  })
}

export const filterByContinent = (payload) => {
  return {
    type: FILTER_CONTINENT,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: SORT_AZ,
    payload
  }
}

export const orderByPopulation = (payload) => {
  return {
    type: POPULATION_FILTER,
    payload
  }
}

export const postActivity = (payload) => async (dispatch) => {
  const { data } = await axios.post(`${url}/activities`, payload);
  return dispatch({ type: POST_ACTIVITY, payload: data })
};

export const orderByActivity = (payload) => {
  return {
    type: FILTER_ACTIVITY,
    payload,
  };
};

export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  payload: pageNumber,
});