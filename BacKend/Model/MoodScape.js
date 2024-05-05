const mongoose = require("mongoose");
const moodScapeSchema = new mongoose.Schema({
    ID:{type:Number, unique:true, required:true},
    poster: { type: String, required: true  },
    songName: { type: String, required: true  },
    artist: { type: String, required: true  },
    songLength: { type: String, required: true  },
    albumName: { type: String, required: true  },
    genre: { type: String, required: true  },
    mood: { type: String, required: true  },
    created_by:{type: String, required: true },
});
const MoodScapeModel = mongoose.model('playlistsongs', moodScapeSchema); 
module.exports = { MoodScapeModel };
