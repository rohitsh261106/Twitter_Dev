const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');

const Comment = require('./models/comment');

app.listen(3000,async()=>{
  console.log("Server Started on Port");
  await connect();
  console.log("mongodb connected")
  // const tweet = await Tweet.create({
  //   content: 'First Tweet',
  //   userEmail: 'rohit.sh2611@gmail.com'
  // });
  const tweetRepo = new TweetRepository();
  const tweet = await tweetRepo.getAll(2,4);
   console.log(tweet[0].contentWithEmail);
})