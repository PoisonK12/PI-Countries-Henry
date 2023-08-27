// const { Country, Activity } = require('../db')

// const getAllActivities = async () => {
//   const activities = await Activity.findAll({
//     include: {
//       model: Country,
//       through: { attributes: [] },
//     }
//   })
//   return activities
// }

// const createActivity = async (name, difficulty, duration, season, countries) => {
//   const activity = await Activity.create({ name, difficulty, duration, season, countries });

//   if (countries && countries.length > 0) {
//     const activityCountry = await Country.findAll({ where: { name: countries } });
//     await activity.addCountries(activityCountry)
//   }

//   return activity;
// }

// module.exports = {
//   getAllActivities,
//   createActivity
// }