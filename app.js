const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("the server is up and running");
})
app.get("/", (req, res) => {
    res.send("Hello Saheb!");
});
