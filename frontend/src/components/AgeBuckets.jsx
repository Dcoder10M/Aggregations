import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from "react-toastify"; // Import Bounce here
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Bucket from "./Bucket";

const AgeBuckets = () => {
  const [bucket1, setBucket1] = useState({});
  const [bucket2, setBucket2] = useState({});
  const [bucket3, setBucket3] = useState({});
  const [bucket4, setBucket4] = useState({});
  const backend_url = import.meta.env.VITE_BACKEND_URI;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend_url}/api/getBucketData`);
        setBucket1(response.data[0]);
        setBucket2(response.data[1]);
        setBucket3(response.data[2]);
        setBucket4(response.data[3]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [backend_url]);

  const navigate = useNavigate();
  const handleShowDatabase = () => {
    navigate("/database");
  };

  async function handleClick() {
    try {
      await axios.get(`${backend_url}/api/changeData`);
      const response = await axios.get(`${backend_url}/api/getBucketData`);
      setBucket1(response.data[0]);
      setBucket2(response.data[1]);
      setBucket3(response.data[2]);
      setBucket4(response.data[3]);

      toast("Database Refreshed!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error refreshing database:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} // Ensure to use curly braces for Bounce
      />
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        User Stats Grouped by Age Range
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full max-w-6xl px-4">
        <Bucket ageGroup="18-24" bucketData={bucket1} />
        <Bucket ageGroup="25-34" bucketData={bucket2} />
        <Bucket ageGroup="35-44" bucketData={bucket3} />
        <Bucket ageGroup="45+" bucketData={bucket4} />
      </div>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md px-4">
        <button
          onClick={handleClick}
          className="min-w-52 bg-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto text-center"
        >
          Refresh Database
        </button>
        <button
          onClick={handleShowDatabase}
          className="min-w-52 bg-green-500 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full sm:w-auto text-center"
        >
          Show Database
        </button>
      </div>
    </div>
  );
};

export default AgeBuckets;
