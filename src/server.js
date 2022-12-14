import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import router from "./routers/index.js";

const app = express();

app.use(json());
app.use(cors());

app.use(router);

const PORT = +process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
