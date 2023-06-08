const testTweet = {
    displayName: 'Tim',
    userName: 'timp',
    timeAgo: '28d',
    content: 'lorem',
    image: ''
};

function showTweet(tweet){
    const tweetSection = document.getElementById('tweets');
    const tweetTemplate = document.getElementById('tweetTemplate');
    const tweetArticle = tweetTemplate.content.cloneNode(true);

    tweetArticle.querySelector('.displayName').innerHTML = tweet.displayName;
    tweetArticle.querySelector('.userName').innerHTML = tweet.userName;
    tweetArticle.querySelector('.timeAgo').innerHTML = tweet.timeAgo;
    tweetArticle.querySelector('.content').innerHTML = tweet.content;
    tweetArticle.querySelector('.image').src = tweet.image;
    
    tweetSection.appendChild(tweetArticle);
}

showTweet();