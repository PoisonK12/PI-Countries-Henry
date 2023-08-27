const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      through: { attributes: [] },
    }
  })
  return countries
}

const getCountryByName = async (name) => {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Activity,
      through: { attributes: [] }
    }
  })
  return country
}

const getCountryById = async (id) => {
  const country = await Country.findOne({
    where: {
      id: id.toUpperCase(),
    },
    include: {
      model: Activity,
      through: { attributes: [] },
    },
  });
  return country;
};

module.exports = {
  getAllCountries,
  getCountryByName,
  getCountryById
}