const express = require("express");
const faker = require("faker");
const router = express.Router();

const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');
const Like = require('../models/like');
const Follower = require('../models/follower');
const Tag = require('../models/tag');
const PostTag = require('../models/postTag');
const View = require('../models/view');

async function insertRandomData() {
  // Function to create fake users
  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push(
      new User({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        age: faker.datatype.number({ min: 18, max: 65 }),
        createdAt: faker.date.past(),
      })
    );
  }
  await User.deleteMany({});
  await User.insertMany(users);

  // Function to create fake posts
  const posts = [];
  for (let i = 0; i < 5; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    posts.push(
      new Post({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        authorId: randomUser._id,
        createdAt: faker.date.recent(),
      })
    );
  }
  await Post.deleteMany({});
  await Post.insertMany(posts);

  // Function to create fake comments
  const comments = [];
  for (let i = 0; i < 5; i++) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    comments.push(
      new Comment({
        text: faker.lorem.sentence(),
        postId: randomPost._id,
        userId: randomUser._id,
        createdAt: faker.date.recent(),
      })
    );
  }
  await Comment.deleteMany({});
  await Comment.insertMany(comments);

  // Function to create fake likes
  const likes = [];
  for (let i = 0; i < 5; i++) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    likes.push(
      new Like({
        postId: randomPost._id,
        userId: randomUser._id,
        createdAt: faker.date.recent(),
      })
    );
  }
  await Like.deleteMany({});
  await Like.insertMany(likes);

  // Function to create fake followers
  const followers = [];
  for (let i = 0; i < 5; i++) {
    const randomFollower = users[Math.floor(Math.random() * users.length)];
    let randomFollowee;
    do {
      randomFollowee = users[Math.floor(Math.random() * users.length)];
    } while (randomFollower._id.equals(randomFollowee._id)); // Ensure follower is not following themselves

    followers.push(
      new Follower({
        followerId: randomFollower._id,
        followeeId: randomFollowee._id,
        createdAt: faker.date.recent(),
      })
    );
  }
  await Follower.deleteMany({});
  await Follower.insertMany(followers);

  // Function to create fake tags
  const tags = [];
  for (let i = 0; i < 5; i++) {
    tags.push(
      new Tag({
        name: faker.lorem.word(),
      })
    );
  }
  await Tag.deleteMany({});
  await Tag.insertMany(tags);

  // Function to create fake post-tags
  const postTags = [];
  for (let i = 0; i < 5; i++) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    postTags.push(
      new PostTag({
        postId: randomPost._id,
        tagId: randomTag._id,
        createdAt: faker.date.recent(),
      })
    );
  }
  await PostTag.deleteMany({});
  await PostTag.insertMany(postTags);

  // Function to create fake views
  const views = [];
  for (let i = 0; i < 5; i++) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    views.push(
      new View({
        postId: randomPost._id,
        userId: randomUser._id,
        timestamp: faker.date.recent(),
      })
    );
  }

  await View.deleteMany({});
  await View.insertMany(views);
}

router.get("/", async (req, res) => {
  try {
    await insertRandomData();
    res.status(200).json({
      msg: "success",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
