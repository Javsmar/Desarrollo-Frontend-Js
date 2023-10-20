const parseTweet = (tweet) => {
    return {
        handler: tweet.author.toUpperCase(),
        photo: tweet.img,
        likes: tweet.likes,
        message: tweet.message
    }
};

export const getTweet = async (tweetId) => {
    const url = (`http://localhost:8000/api/tweets/${tweetId}`);
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