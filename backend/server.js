import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
// we create this in order to call authorization endpoints
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("app is running on " + PORT);
  connectMongoDB();
});
