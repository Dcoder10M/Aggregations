import React, { useState, useEffect } from "react";
import axios from "axios";
import { waveform } from "ldrs";

const DatabaseDisplay = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [tags, setTags] = useState([]);
  const [postTags, setPostTags] = useState([]);
  const [views, setViews] = useState([]);
  const [loading, setLoading] = useState(true);
  const backend_url = import.meta.env.VITE_BACKEND_URI;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get(`${backend_url}/api/users`);
        const postsResponse = await axios.get(`${backend_url}/api/posts`);
        const commentsResponse = await axios.get(`${backend_url}/api/comments`);
        const likesResponse = await axios.get(`${backend_url}/api/likes`);
        const followersResponse = await axios.get(
          `${backend_url}/api/followers`
        );
        const tagsResponse = await axios.get(`${backend_url}/api/tags`);
        const postTagsResponse = await axios.get(`${backend_url}/api/postTags`);
        const viewsResponse = await axios.get(`${backend_url}/api/views`);

        setUsers(usersResponse.data);
        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
        setLikes(likesResponse.data);
        setFollowers(followersResponse.data);
        setTags(tagsResponse.data);
        setPostTags(postTagsResponse.data);
        setViews(viewsResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); // Data fetching is complete, so set loading to false
      }
    };

    fetchData();
  }, []);

  waveform.register();

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <l-waveform
            size="35"
            stroke="3.5"
            speed="1"
            color="black"
          ></l-waveform>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6 text-black text-center">
            Database Collections
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Users Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-blue-300">
              <h2 className="font-semibold text-xl mb-2 text-blue-500">
                Users
              </h2>
              {users.map((user) => (
                <div key={user._id} className="border-b py-2">
                  <p>
                    <span className="font-bold">Username:</span> {user.username}
                  </p>
                  <p>
                    <span className="font-bold">Email:</span> {user.email}
                  </p>
                  <p>
                    <span className="font-bold">Age:</span> {user.age}
                  </p>
                </div>
              ))}
            </div>

            {/* Posts Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-green-300">
              <h2 className="font-semibold text-xl mb-2 text-green-500">
                Posts
              </h2>
              {posts.map((post) => (
                <div key={post._id} className="border-b py-2">
                  <p>
                    <span className="font-bold">Title:</span> {post.title}
                  </p>
                  <p>
                    <span className="font-bold">Content:</span> {post.content}
                  </p>
                  <p>
                    <span className="font-bold">Author ID:</span>{" "}
                    {post.authorId}
                  </p>
                </div>
              ))}
            </div>

            {/* Comments Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-yellow-300">
              <h2 className="font-semibold text-xl mb-2 text-yellow-500">
                Comments
              </h2>
              {comments.map((comment) => (
                <div key={comment._id} className="border-b py-2">
                  <p>
                    <span className="font-bold">Text:</span> {comment.text}
                  </p>
                  <p>
                    <span className="font-bold">Post ID:</span> {comment.postId}
                  </p>
                  <p>
                    <span className="font-bold">User ID:</span> {comment.userId}
                  </p>
                </div>
              ))}
            </div>

            {/* Likes Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-red-300">
              <h2 className="font-semibold text-xl mb-2 text-red-500">Likes</h2>
              {likes.map((like) => (
                <div key={like._id} className="border-b py-2">
                  <p>
                    <span className="font-bold">Post ID:</span> {like.postId}
                  </p>
                  <p>
                    <span className="font-bold">User ID:</span> {like.userId}
                  </p>
                </div>
              ))}
            </div>

            {/* Followers Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-purple-300">
              <h2 className="font-semibold text-xl mb-2 text-purple-500">
                Followers
              </h2>
              {followers.map((follower) => (
                <div key={follower._id} className="border-b py-2">
                  <p>
                    <span className="font-bold">Follower ID:</span>{" "}
                    {follower.followerId}
                  </p>
                  <p>
                    <span className="font-bold">Followee ID:</span>{" "}
                    {follower.followeeId}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-teal-300">
              <h2 className="font-semibold text-xl mb-2 text-teal-500">Tags</h2>
              {tags.map((tag) => (
                <div key={tag._id} className="border-b py-2">
                  <p>
                    <span className="font-bold">Name:</span> {tag.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Post Tags Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-orange-300">
              <h2 className="font-semibold text-xl mb-2 text-orange-500">
                Post Tags
              </h2>
              {postTags.map((postTag) => (
                <div key={postTag._id} className="border-b py-2">
                  <p>
                    <span className="font-bold">Post ID:</span> {postTag.postId}
                  </p>
                  <p>
                    <span className="font-bold">Tag ID:</span> {postTag.tagId}
                  </p>
                </div>
              ))}
            </div>

            {/* Views Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-indigo-300">
              <h2 className="font-semibold text-xl mb-2 text-indigo-500">
                Views
              </h2>
              {views.map((view) => (
                <div key={view._id} className="border-b py-2">
                  <p>
                    <span className="font-bold">Post ID:</span> {view.postId}
                  </p>
                  <p>
                    <span className="font-bold">User ID:</span> {view.userId}
                  </p>
                  <p>
                    <span className="font-bold">Timestamp:</span>{" "}
                    {new Date(view.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DatabaseDisplay;
