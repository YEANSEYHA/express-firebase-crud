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
  res.send({ msg: "Created Todo" });
});

app.put("/api/todo/update/:id", async (req, res) => {
   // check loop list here 

  // have the same todo can not update

  // if not allow updated

  // Handle updated the same todo
  // const snapshot = await Todo.get();
  // const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // console.log(list)

 
  


  const id = req.params.id;
  delete req.body.id;
  const data = req.body;
  console.log('logdata update',data)
  await Todo.doc(id).update(data);

  res.send({ msg: "Updated Todo" });
});

app.delete("/api/todo/delete/:id", async (req, res) => {
  // need only id to delte todo
  const id = req.params.id;
  console.log('Deleted Item id',id)
  await Todo.doc(id).delete();
  res.send({ msg: "Deleted Todo" });
});
app.listen(5001, () => console.log("Up & RUnning 5001"));
