import express from 'express';
import { bookActivity, getMyBookings } from '../controllers/bookingController.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post('/', protect, bookActivity);
router.get('/', protect, getMyBookings);

export default router;
