const express = require("express");
const router = express.Router();

const User = require('../models/user');

async function getAggregatedData() {
  const results = await User.aggregate([
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "authorId",
        as: "posts",
      },
    },
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "userId",
        as: "comments",
      },
    },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "userId",
        as: "likes",
      },
    },
    {
      $lookup: {
        from: "views",
        localField: "_id",
        foreignField: "userId",
        as: "views",
      },
    },
    {
      $bucket: {
        groupBy: "$age",
        boundaries: [18, 25, 35, 45, Infinity],
        default: "Other",
        output: {
          TotalPosts: { $sum: { $size: { $ifNull: ["$posts", []] } } },
          TotalComments: { $sum: { $size: { $ifNull: ["$comments", []] } } },
          TotalLikes: { $sum: { $size: { $ifNull: ["$likes", []] } } },
          TotalViews: { $sum: { $size: { $ifNull: ["$views", []] } } },
        },
      },
    },
  ]);
  return results;
}

router.get("/", async (req, res) => {
  try {
    const data = await getAggregatedData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
