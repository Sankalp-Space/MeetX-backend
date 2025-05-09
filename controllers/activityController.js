import Activity from '../models/Activity.js';


export const getActivities = async (req, res) => {
    try {
    const activities = await Activity.find();
    res.json(activities);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
};

export const addActivity = async (req, res) => {
    const { title, description, location, date } = req.body;
    try {
    const newActivity = new Activity({ title, description, location, date });
    await newActivity.save();
    res.status(201).json(newActivity);
    } catch (err) {

    res.status(400).json({ message: err.message });
    }
};
