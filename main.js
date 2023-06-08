const tweet = {
    displayName: 'Tim',
    userName: 'timp',
    timeAgo: '28d',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit explicabo saepe pariatur similique, dignissimos quam, obcaecati, quis placeat at iusto vel! Iure est neque eaque magni dignissimos porro accusantium. Harum. ',
    image: 'https://i.imgur.com/YKI1zyC.jpeg'
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

showTweet(tweet);

function getTweets(){
    fetch("twooter.json")
    .then((response) => response.json())
    .then(showTweet)
}

function showTweets(){
    
}

getTweets();