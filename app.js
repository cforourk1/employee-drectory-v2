import express from "express";

//import from employees.js for requests
import router from "#api/employees";


// express app
const app = express();

//export app
export default app;

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

//body parsing
app.use(express.json());

//router

app.use("/employees", router);


//initial get req
app.get("/", (req, res) => {
  res.send("Hello employees!");
});



// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});