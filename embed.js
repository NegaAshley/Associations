var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//User - email and name
var userSchema = new mongoose.schema({
    email: String,
    name: String
});

var User = mongoose.model("User", userSchema);

//Post - title, content
var postSchema = new mongoose.schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);