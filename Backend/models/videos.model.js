const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  videoId: { type: String, required: true },
  title: { type: String },
  thumbnail: { type: String },
  comments: { type: Array },
  likes: { type: Array },
  likecount: { type: Number, default: 0 },
});

const videoModel = mongoose.model("videos", videoSchema);

module.exports = {
  videoModel,
};
