import Booking from '../models/Booking.js';

export const bookActivity = async (req, res) => {
    const { activityId } = req.body;
    const booking = await Booking.create({ user: req.user._id, activity: activityId });
    res.status(201).json(booking);

};

export const getMyBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id }).populate('activity');
    res.json(bookings);
};