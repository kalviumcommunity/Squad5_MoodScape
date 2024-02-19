const mongoose = require("mongoose");
const MoodScapeSchema = mongoose.Schema({
    poster: { type: String, required: true },
    songName: { type: String, required: true },
    artist: { type: String, required: true },
    songLength: { type: String, required: true },
    albumName: { type: String, required: true },
    genre: { type: String, required: true },
    mood: { type: String, required: true },
});
const MoodScapeModel = mongoose.model('moodscape', MoodScapeSchema); 
module.exports = { MoodScapeModel };
