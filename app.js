const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js"); // Here we are not install the module so we require the module in this way

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

const items = ["Patience","Persiverence","Dedication"];
const workItems = [];

app.get("/", function(req, res){
    
    const day = date.returnDate();


    res.render("list", {listTitle : day, newItem: items});
})

app.post("/", function(req, res){

    const item = req.body.nextItem;

    if(req.body.list == "work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }


})

app.get("/work", function(req, res){
    res.render("list", {listTitle : "work", newItem : workItems});
})

app.get("/about", function(req, res){
    res.render("about");
})


app.listen(3000, function(){
    console.log("Server starts on port 3000");
})