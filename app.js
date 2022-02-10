const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const titles = [];
const posts = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    const today = new Date;
    const options = {weekday: "long"}
    const day = today.toLocaleDateString("en-US", options);

    res.render("list", {weekday: day, fullPost: posts, fullTitle: titles});
});

app.post("/", function(req, res){
    const title = req.body.titleText;
    titles.push(title);
    const post = req.body.postText;
    posts.push(post);
    res.redirect("/");
});


app.listen(3000, function(){
    console.log("app is running on port 3000");
});