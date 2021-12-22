const { Post } = require('../models');

const postData = [
    {
        title: "Best restaurants in WA!",
        body: "Most restaurants are trying to meet up with the standards. What is so interesting about these restaurants is that it makes life easy for most people who love delicious and yummy food.",
        
    },
    {
        title: "Summer outfits for ladies!",
        body: "Summer is the most beautiful season for ladies to show their colorful outfits. Embroidered with tiny hole designs, eyelet fabric is a summer staple because of how breathable and lightweight it is. Plus, the eyelet details enhance the whimsy and romance of our favorite sleeveless blouses.",
        
    },
    {
        title: "Note taker for daily planning!",
        body: "A daily planning routine is a simple, short checklist of planning tasks you complete each day. This usually involves staying up to date with your to do list, checking in with your habit trackers, and planning out the next day.  ",
        

    },
    {
        title: "Flowers for home decoration!",
        body: "No matter the season, we love flowers. But now that we've sprung forward an hour and the temperatures have climbed above forty degrees, we're feeling the floral love even more.Wherever you place your flowers, these designer ideas and tricks will have 'em looking better and lasting longer than ever. ",
        
    },
    {
        title: "Public Speaking!",
        body: "Public speaking, also called oratory or oration, has traditionally meant the act of speaking face to face to a live audience. Today it includes any form of speaking to an audience, including pre-recorded speech delivered over great distance by means of technology. ",
    
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;