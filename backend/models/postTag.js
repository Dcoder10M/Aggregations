const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postTagsSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  tagId: { type: Schema.Types.ObjectId, ref: 'Tag', required: true },
  createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("PostTag", postTagsSchema);
