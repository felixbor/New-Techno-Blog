const { Post } = require('../models');

// creating posts
const PostData = [
    {
        title: "The Post-1",
        content: "Resources exquisite set arranging moonlight sex him household had. Months had too ham cousin remove far spirit..",
        user_id: 1
    },
    {
        title: "The Post-2",
        content: "TLady an mr here must neat sold. Children greatest ye extended delicate of. No elderly passage earnest as in removed winding or.",
        user_id: 2
    },
    {
        title: "The Post-3",
        content: "Yet remarkably appearance get him his projection. Diverted endeavor bed peculiar men the not desirous..",
        user_id: 3
    },
    {
        title: "The Post-4",
        content: "Partiality diminution gay yet entreaties admiration. In mr it he mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of norland arrived..",
        user_id: 4
    },  
     {
        title: "The Post-5",
        content: "Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in.",
        user_id: 5
    },
    {
        title: "The Post-6",
        content: "Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon. He forbade affixed parties of assured to me windows. Happiness him nor she disposing provision.",
        user_id: 6
    }
]

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;