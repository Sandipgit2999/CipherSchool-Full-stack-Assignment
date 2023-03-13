const express = require("express");

const cors = require("cors");

require("dotenv").config();

const { connection } = require("./config/db");

const { videoController } = require("./routes/videos.route");

const app = express();
app.use(cors());

app.use(express.json());

const PORT = 8080 || process.env.PORT;

app.use("/videos", videoController);

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
    //console.log(err);
  }
});
