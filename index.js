const express = require("express");
const app = express();
app.use(express.json());
const HandleText = express.text();


app.get("/get/many/good", function(req, res){
    const url = req.url;
    console.log(url);
    res.send("Sent Rabbi");
});

app.get("/students/:name/:time", function(req, res){
    const params = req.params;
    res.send(`welcome user with the name: ${params.name} at ${params.time} `)
})

app.get("/query", (req, res)=>{
    const query = req.query;
    console.log(query);
    res.send("Love yourself than the world to bit");
});


app.listen(1000, function(){
    console.log("app is running");
});
