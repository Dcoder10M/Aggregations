const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  followerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  followeeId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Follower", followerSchema);
