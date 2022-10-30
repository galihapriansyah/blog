import express from "express";
import cors from "cors";
import PostRoute from "./routes/PostRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(PostRoute);

app.listen(5000, ()=>{
  console.log("Server up and running...")
})