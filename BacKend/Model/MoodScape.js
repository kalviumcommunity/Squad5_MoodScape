const mongoose = require("mongoose");
const moodScapeSchema = new mongoose.Schema({
    ID:{type:Number, unique:true, required:true},
    poster: { type: String },
    songName: { type: String },
    artist: { type: String },
    songLength: { type: String },
    albumName: { type: String },
    genre: { type: String },
    mood: { type: String },
});
const MoodScapeModel = mongoose.model('playlistsongs', moodScapeSchema); 
module.exports = { MoodScapeModel };
