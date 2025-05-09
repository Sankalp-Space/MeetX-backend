import express from 'express';
import { addActivity, getActivities } from '../controllers/activityController.js';

const router = express.Router();
router.get('/', getActivities);
router.post("/", addActivity);

export default router;