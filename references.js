var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//Post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//User - email and name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }    
    ]
});

var User = mongoose.model("User", userSchema);


// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

Post.create({
    title: "How to Cook the Best Burger Part 2",
    content: "Blah blah blah"
}, function(err, post){
    if(err){
        console.log(err);
    }else{
        User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
            if(err){
                console.log(err);
            }else{
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                   if(err){
                       console.log(err);
                   }else{
                       console.log(data);
                   }
                });
            }
        });
    }
});