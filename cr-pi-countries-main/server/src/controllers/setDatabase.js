const axios = require('axios');
require('dotenv').config();
const { Country } = require('../db');
const { API_URL } = process.env;

const fetchAndSaveCountriesData = async () => {
  try {
    // Verificar si hay datos en la base de datos
    const countryCount = await Country.count();
    
    if (countryCount === 0) {
      const response = await axios.get(`${API_URL}/countries`);
      const countriesData = response.data;

      const countriesModel = countriesData.map(elem => {
        return {
        id: elem.cca3,
        name: elem.name.common,
        flags: elem.flags.png,
        continent: elem.continents[0],
        capital: elem.capital ? elem.capital[0] : "-",
        subregion: elem.subregion,
        area: elem.area,
        population: elem.population
      }});
  
      for (const countryData of countriesModel) { 
        await Country.findOrCreate({
          where: { id: countryData.id }, 
          defaults: countryData, 
        });
      }

      console.log('Datos guardados correctamente.');
    } else {
      console.log('Ya hay paises guardados en la base de datos.');
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = {
  fetchAndSaveCountriesData,
}