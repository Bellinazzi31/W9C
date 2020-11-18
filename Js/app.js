var tweets = [
    {
        tweet: "My first Tweet",
        username: "Luan",
        created_at: "10-25-2020",
        age: 10
    
    },
    {
        tweet: "Beautiful day today",
        username: "Wagner",
        created_at: "10-03-2020",
        age: 14
    
    },
    {
        tweet: "Snowboarding season",
        username: "Felipe",
        created_at: "04-08-2020",
        age: 16
    
    },
    {
        tweet: "Lake Louise here we goooo!",
        username: "Luan",
        created_at: "05-11-2020",
        age: 16
    
    },
    {
        tweet: "Merry Christmas",
        username: "Felipe",
        created_at: "25-12-2020",
        age: 22
    
    },
    {
        tweet: "Bring me back to life",
        username: "Jeff",
        created_at: "01-04-2020",
        age: 18
    
    },
    {
        tweet: "I Love Surfing",
        username: "Felipe",
        created_at: "20-02-2021",
        age: 31
    
    },
    {
        tweet: "We have a game today",
        username: "Edson",
        created_at: "18-09-2020",
        age: 35
    
    },
    {
        tweet: "I'm a web Development",
        username: "Luan",
        created_at: "25-10-2020",
        age: 30
    
    },
    {
        tweet: "I play kites",
        username: "Felipe",
        created_at: "10-01-2020",
        age: 16
    
    },   
];

function ageChecker(tweet) {
    return tweet.age >=18

}
var overEightteenTweets = tweets.filter(ageChecker);
console.log(overEightteenTweets);


