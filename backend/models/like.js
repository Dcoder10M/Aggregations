const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("Like", likeSchema);
