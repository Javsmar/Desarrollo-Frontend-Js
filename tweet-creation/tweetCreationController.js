import { createTweet } from "./tweetCreationModel.js";

export const tweetCreationController = (tweetCreation) => {
    tweetCreation.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(tweetCreation);
        const message = formData.get("message");

        await createTweet(message);
    })
}