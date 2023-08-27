const { Activity } = require('../db');

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    if (activities.length === 0) throw Error("There's not activity to show")
    res.status(200).json(activities)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const activityCreation = await Activity.create({ 
      name, 
      difficulty, 
      duration, 
      season, 
      countries 
    });
    activityCreation.addCountries(countries)
    res.status(201).json("Succesfully created");
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
};

module.exports = {
  getActivities,
  postActivity
};

