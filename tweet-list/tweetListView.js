export const buildTweet = (tweet) => {
  return `
  <a href="./tweetDetail.html?id=${tweet.id}">
    <span>${tweet.handler}</span>
    <span>${tweet.date}</span>
    <img src="${tweet.photo}" alt="tweet image">
    <p>${tweet.message}</p>
    <p>${tweet.likes} likes</p>
  </a>

`;
}

export const emptyTweets = () => {
  return `<h3>No hay tweets disponibles, disculpa las molestias.</h3>`
}
