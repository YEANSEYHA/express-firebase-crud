const express = require("express");
const cors = require("cors");
const Todo = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/todos", async (req, res) => {
  const snapshot = await Todo.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/api/todo/create", async (req, res) => {
  const data = req.body;
  await Todo.add( data );
  res.send({ msg: "User Added" });
});

app.put("/api/todo/update", async (req, res) => {
  const id = req.body.id;
  // delete req.body.id;
  const data = req.body;
  console.log('logdata update',data)
  await Todo.doc(id).update(data);

  res.send({ msg: "Updated" });
});

app.delete("/api/todo/delete", async (req, res) => {
  const id = req.body.id;
  await Todo.doc(id).delete();
  res.send({ msg: "Deleted" });
});
app.listen(5001, () => console.log("Up & RUnning 5001"));
