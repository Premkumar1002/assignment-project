const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const taskRoutes = require("./routes/tasks");
const workshopRoutes = require("./routes/workshop");

app.use("/tasks", taskRoutes);
app.use("/workshop", workshopRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});