const { Comment } = require('../models');

//  comments data
const commentData = [
    {
        user_id: 1,
        post_id: 6,
        comment: "Best ever!"
    },
    {
        user_id: 2,
        post_id: 5,
        comment: "Never seen before!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment: "Like it"
    },
    {
        user_id: 4,
        post_id: 3,
        comment: "Completely agree!"
    },
    {
        user_id: 5,
        post_id: 2,
        comment: "never before!"
    },
    {
        user_id: 6,
        post_id: 1,
        comment: "This is so important!"
    }

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;