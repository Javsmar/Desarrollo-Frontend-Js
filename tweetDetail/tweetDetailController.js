import { getTweet } from "./tweetDetailModel.js"
import { buildTweet } from "./tweetDteail.Views.js";
import {dispatchEvent} from "../utils/dispatchEvent.js"
import { decodeToken } from "../utils/decodeToken.js";
import {deleteTweet} from "./tweetDetailModel.js"

export const tweetDetailController = async (tweetDetail, tweetId) => {
    try {
        const tweet = await getTweet(tweetId);
        tweetDetail.innerHTML = buildTweet(tweet);
        handleDeleteTweet(tweet, tweetDetail);
    } catch (error) {
        
        dispatchEvent('tweetLouder', {type: "error", message: "tweet no existe"}, tweetDetail);
        setTimeout(() => {
            window.location = './index.html';
        }, 3000)
    }
}

const handleDeleteTweet = (tweet, tweetDetail) => {
    const token  = localStorage.getItem('token');
    if(token){
        const {userId} = decodeToken(token);
        if(userId === tweet.userId){
            addDeletetweetButton(tweet, tweetDetail);
        }
    }
}

const addDeletetweetButton = (tweet, tweetDetail) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar Tweet';

    deleteButton.addEventListener('click', async () => {
        if(confirm('¿Seguro que quieres borra el tweet')){
            await deleteTweet(tweet.id);
            window.location = "index.html";
        }
    })

    tweetDetail.appendChild(deleteButton);
}