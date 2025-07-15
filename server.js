//require(express)
import express from "express";

const app = express();

console.log("start");
app.listen(8080, () => {
    console.log("server runnint at");
    console.log("listening");
})



