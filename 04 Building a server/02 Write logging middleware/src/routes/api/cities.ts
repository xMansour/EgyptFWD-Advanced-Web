import express from "express";

const cities = express.Router();

cities.get("/", (req, res) => {
    res.send("Cities are visited");
    console.log("Log:: Cities are visited");
})

export default cities;