import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    datetime: Date,
});

export default mongoose.model('Activity', activitySchema);