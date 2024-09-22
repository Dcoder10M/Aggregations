import React from "react";

const Bucket = ({ ageGroup, bucketData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-lg sm:text-xl font-semibold">{ageGroup}</h2>
      <p className="mt-4 text-gray-600">Total Posts: {bucketData?.TotalPosts ?? 0}</p>
      <p className="text-gray-600">Total Comments: {bucketData?.TotalComments??0}</p>
      <p className="text-gray-600">Total Likes: {bucketData?.TotalLikes??0}</p>
      <p className="text-gray-600">Total Views: {bucketData?.TotalViews??0}</p>
    </div>
  );
};

export default Bucket;
