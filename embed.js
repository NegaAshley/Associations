var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

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
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "charliexu@brown.edu",
//     name: "Charlie Xu"
// });

// newUser.posts.push({
//     title: "How to Play Dominions",
//     content: "Just put in 1000 hours."
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious."
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

User.findOne({name: "Charlie Xu"}, function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
        user.posts.push({
            title: "Three Ways to Win Dominions",
            content: "1. You can't. 2. Play more. 3. Good luck!"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        });
    }
});