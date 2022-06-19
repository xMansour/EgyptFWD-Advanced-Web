import express from "express";

const countries = express.Router();

countries.get("/", (req, res) => {
    res.send("countries are visited");
    console.log("Log:: countries are visited");
})

export default countries;