const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  await Thought.deleteMany({});

  //create seed data for users and thoughts
  const thoughts = [
    {
      thoughtText: "climbing is fun",
      username: "pvrutneski",
    },
    {
      thoughtText: "gaming is fun",
      username: "boopdid",
    },
    {
      thoughtText: "walks are fun",
      username: "scoobythedoo",
    },
    {
      thoughtText: "trying to take over the world is fun",
      username: "brain",
    },
  ];

  const users = [
    {
      username: "pvrutneski",
      email: "pvrutneski@gmail.com",
    },
    {
      username: "boopdid",
      email: "boopdid@gmail.com",
    },
    {
      username: "scoobythedoo",
      email: "scoobythedoo@gmail.com",
    },
    {
      username: "brain",
      email: "brain@gmail.com",
    },
  ];

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
