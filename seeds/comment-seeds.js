const { Comment } = require('../models');

const commentData = [
    {
        
        body: "So Lovely!"
    },
    {
       
        body: "Wow, wonderful job!"
    },
    {
        
        body: "Amazing! it was a wonderful one"
    },
    {
       
        body: "Going to new places is a big form of relief! Fabulous!"
    },
    {
       
        body: "Great things are good!"
    },
    {
        
        body: "Great achievement. You are worth it!"
    },
    {
        
        body: "Great presentation"
    },
    {
        body: "So lovely!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;