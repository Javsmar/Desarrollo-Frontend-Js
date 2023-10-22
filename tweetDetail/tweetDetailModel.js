const parseTweet = (tweet) => {
    return {
        handler: tweet.user.username,
        message: tweet.message,
        likes: [],
        userId: tweet.user.id, 
        id: tweet.id
    }
};

export const getTweet = async (tweetId) => {
    const url = (`http://localhost:8000/api/tweets/${tweetId}?_expand=user`);
    let tweet;

    try {
        const response = await fetch(url);
        if(response.ok){
            tweet = await response.json();

        }else{
            throw new Error('El tweet no existe');
        }
        
    } catch (error) {
        throw error.message;
    }

    return parseTweet(tweet);
}

export const deleteTweet = async (tweetId) => {
    const url = `http://localhost:8000/api/tweets/${tweetId}`;
    const token = localStorage.getItem('token');
  
    let response;
    try {
      response = await fetch(url, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message);
      }
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  }