// server.js
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); 


import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db.js";


dotenv.config();
const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

start();