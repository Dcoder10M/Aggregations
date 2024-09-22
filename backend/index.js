require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const bucketRouter = require("./routes/bucketData");
const changeDataRouter = require("./routes/changeData");
const databaseRoutes = require("./routes/database");

const connectDB = require("./db");
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", databaseRoutes);
app.use("/api/getBucketData", bucketRouter);
app.use("/api/changeData", changeDataRouter)

const PORT = process.env.PORT || 4321; 

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
