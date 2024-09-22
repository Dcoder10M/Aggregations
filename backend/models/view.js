const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const viewsSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("View", viewsSchema);
