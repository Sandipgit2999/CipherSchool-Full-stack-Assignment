const { Router } = require("express");

const { videoModel } = require("../models/videos.model");

const videoController = Router();

videoController.get("/", async (req, res) => {
  const todos = await videoModel.find();
  res.send(todos);
});

videoController.get("/:videoId", async (req, res) => {
  const { videoId } = req.params;
  const todos = await videoModel.findOne({ _id: videoId });
  res.send(todos);
});

videoController.post("/create", async (req, res) => {
  const payload = req.body;

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  //console.log(formattedDate);

  if (payload.videoId) {
    const new_todo = new videoModel({ ...payload, date: formattedDate });
    await new_todo.save();

    res.send({ msg: "Todo added successfully" });
  } else {
    res.send({ msg: "please fill todo" });
  }
});

videoController.put("/:videoId", async (req, res) => {
  const { videoId } = req.params;
  const payload = req.body;
  const new_todo = await videoModel.updateOne(
    {
      _id: videoId,
    },
    {
      $set: payload,
    }
  );

  res.send({ msg: "Todo updated successfully" });
});

videoController.patch("/:videoId", async (req, res) => {
  const { videoId } = req.params;
  //const payload = req.body;

  const { comments } = req.body;

  console.log(comments);

  const todos = await videoModel.findOne({ _id: videoId });
  console.log(todos.comments, comments, "todos");
  todos.comments.push(comments);
  console.log("payload", todos);
  const new_todo = await videoModel.updateOne(
    {
      _id: videoId,
    },
    {
      $set: todos,
    }
  );

  res.send({ msg: "Todo updated successfully" });
});

videoController.delete("/:videoId", async (req, res) => {
  const { videoId } = req.params;

  const new_todo = await videoModel.deleteOne({
    _id: videoId,
  });

  res.send("todo successfully deleted");
});

module.exports = {
  videoController,
};
