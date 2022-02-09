const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const { getHouses } = require("./controller");
app.get("/api/houses", getHouses);

const { getHousesId } = require("./controller");
app.get(`/api/houses/:id`, getHousesId);
//vanilla code
// const { usernamepassword } = require("./controller");
// app.post("/api/usernamepassword", username);

app.listen(4000, () => console.log("Server running on 4000"));
