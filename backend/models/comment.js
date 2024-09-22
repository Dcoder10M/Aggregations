const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("Comment", commentSchema);
