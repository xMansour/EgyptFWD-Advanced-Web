import express from "express";
import cities from "./api/cities";
import countries from "./api/countries";


const routes = express.Router();
routes.get("/", (req, res) => {
    res.send("Main route");
    console.log("Log:: Main route");
})
routes.use("/cities", cities);
routes.use("/countries", countries);


export default routes;