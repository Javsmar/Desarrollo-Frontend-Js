const transformTweets = (tweets) => {
  return tweets.map(tweet => ({
    handler: tweet.author,
    date: new Date().toISOString(),
    message: tweet.message,
    likes: tweet.likes.length,
    photo: tweet.image,
    id: tweet.id
  }))
}

export const getTweets = async () => {
  const url = "http://localhost:8000/api/tweets";
  let parsedTweets = [];

  try {
    const response = await fetch(url);
    const tweets = await response.json();
    parsedTweets = transformTweets(tweets)
    
  } catch (error) {
    throw error;
  }
  
  return parsedTweets;
}
