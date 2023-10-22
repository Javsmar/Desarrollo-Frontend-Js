export const buildTweet = (tweet) => {
    let tweetTemplate  = `
    <span>Autor: ${tweet.handler}</span><br>                            
    <p>Tweet: ${tweet.message}</p>           
    `;

    if (tweet.likes.length > 0) {
        tweetTemplate += `<p>Estos usuarios: ${tweet.likes.join(', ')} hand dado like</p>`;
    }

    return tweetTemplate;
}

