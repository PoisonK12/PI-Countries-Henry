const {
  getAllCountries,
  getCountryByName,
  getCountryById
} = require('../handlers/countryHandlers')

const {
  fetchAndSaveCountriesData
} = require('./setDatabase')

fetchAndSaveCountriesData()

const getCountries = async (req, res) => {
  const { name } = req.query
  const allCountries = await getAllCountries()
  try {
    let countries = name ? await getCountryByName(name) : allCountries
    res.status(200).json(countries)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getCountryId = async (req, res) => {
  const { id } = req.params
  try {
    const country = await getCountryById(id)
    if (country) {
      res.status(200).json(country)
    } else {
      res.status(404).json("Pais no encontrado")
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getCountries,
  getCountryId
}