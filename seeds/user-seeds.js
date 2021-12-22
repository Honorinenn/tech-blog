const { User } = require('../models');

const userData = [
    {
        username: "willy_jakes",
        password: "p@ssword1"
    },
    {
        username: "brice_kasi",
        password: "p@ssword2"
    },
    {
        username: "shan_steve",
        password: "p@ssword3"
    },
    {
        username: "coco_bri",
        password: "p@ssword4"
    },
    {
        username: "brunelle_jay",
        password: "p@ssword5"
    },
    {
        username: "kelly_patty",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;