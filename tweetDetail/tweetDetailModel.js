import { sparrestApi } from "../utils/sparrestApi.js";

const parseTweet = (tweet) => {
    return {
        handler: tweet.user.username,
        message: tweet.message,
        likes: [],
        userId: tweet.user.id,
        id: tweet.id
    }
}

export const getTweet = async (tweetId) => {
    const endpoint = `api/tweets/${tweetId}?_expand=user`;

    const tweet = await sparrestApi().get(endpoint)

    return parseTweet(tweet);
}

export const deleteTweet = async (tweetId) => {
    const endpoint = `api/tweets/${tweetId}`;

    await sparrestApi().delete(endpoint);
}