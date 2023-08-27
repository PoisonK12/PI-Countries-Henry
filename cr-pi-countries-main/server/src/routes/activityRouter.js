const { Router } = require('express');
const {
  getActivities,
  postActivity
} = require('../controllers/activityControllers');

const activityRouter = Router();

activityRouter.get("/", getActivities);
activityRouter.post("/", postActivity);

module.exports = activityRouter;