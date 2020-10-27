const db = require("../db/connection");
const Post = require("../models/post");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const user1 = new User({
    username: "kylethousand",
    email: "kylethousand@gmail.com",
    posts: [],
  });
  await user1.save();
  const user2 = new User({
    username: "cory",
    email: "cory@gmail.com",
    posts: [],
  });
  const posts = [
    {
      title: "kyles first post",
      imgURL:
        "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: "This is a cat",
      userId: user1,
    },
    {
      title: "davids first Post",
      imgURL:
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: "This cat kind of looks like my cat.",
      userId: user2,
    },
    {
      title: "kyles second post",
      imgURL:
        "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: "This is a cat",
      userId: user1,
    },
  ];

  await Post.insertMany(posts);
  console.log("Created Posts!");

  user1.posts = await Post.find({ userId: user1 });
  await user1.save();
  user2.posts = await Post.find({ userId: user2 });
  await user2.save();
};
const run = async () => {
  await main();
  db.close();
};

run();
