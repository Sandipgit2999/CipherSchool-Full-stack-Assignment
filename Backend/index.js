const express = require("express");

const cors = require("cors");

require("dotenv").config();

const { connection } = require("./config/db");
const { authorization } = require("./middlewares/Authorization");

const { videoController } = require("./routes/videos.route");
const { UserController } = require("./routes/user.route");

const app = express();
app.use(cors());

app.use(express.json());

const PORT = 8080 || process.env.PORT;

app.use("/user", UserController);

app.use("/videos", videoController);
app.use(authorization);

app.get("/", (req, res) => {
  res.send("Heello");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connection established");
    console.log("listening on port", PORT);
  } catch (err) {
    console.log("something went wrong");
    console.log(err);
  }
});
