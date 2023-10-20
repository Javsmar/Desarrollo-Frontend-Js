import { getTweet } from "./tweetDetailModel.js"
import { buildTweet } from "./tweetDteail.Views.js";
import {dispatchEvent} from "../utils/dispatchEvent.js"

export const tweetDetailController = async (tweetDetail, tweetId) => {
    try {
        const tweet = await getTweet(tweetId);
        tweetDetail.innerHTML = buildTweet(tweet);

    } catch (error) {
        
        dispatchEvent('tweetLouder', {type: "error", message: "tweet no existe"}, tweetDetail);
        setTimeout(() => {
            window.location = './index.html';
        }, 3000)
    }
    
}

