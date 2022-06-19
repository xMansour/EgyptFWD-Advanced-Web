import express from "express";
import csvToJson from "csvtojson";
import path from "path";


const convert = express.Router();

convert.get("/", (req, res) => {
    res.send("Convert Route");
    const csvFilePath = path.basename("../../../users.csv");
    console.log(csvFilePath);
    csvToJson().fromFile(csvFilePath).then((jsonObj) => {
        // console.log(jsonObj);
        jsonObj.forEach((obj) => {
            if (obj.phone === "") {
                obj.phone = "Missing data";
            }
            console.log(obj);

        })
    })


})


export default convert;