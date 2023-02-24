const router = require('express').Router();
const { Post, Comment,User} = require('../models');
const withAuth = require('../utils/auth');



// get all post
router.get('/', withAuth,async (req, res) => { 
  console.log("dashboardruote")
  try {
      const postData = await Post.findAll(
        {
          where: {
            user_id: req.session.user_id,
          },
          attributes: ['id', 'title', 'created_at', 'content'],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['userName'],
              },
            },
            {
              model: User,
              attributes: ['userName'],
            },
          ],
        }
      );
      const posts = postData.map(post => post.toJSON());
       // render to 
       //res.send(posts)
       console.log(posts)
      res.status(200).render('dashboard', { posts,logged_in: true });
     
       } catch (err) {
        console.log(err)
       res.status(500).json(err);       }
});


router.get('/editPost/:id', withAuth, async (req, res) => {
  
  try {
      const updatePost = await Post.findByPk(req.params.id);
      console.log(updatePost);

      if (updatePost) {
  
        const post = updatePost.get({ plain: true });

        res.render('editPost', {
          post,
          logged_in: true
        });
      }
      //res.status(200).json(updatePost);
  } catch (e) {
      console.log(e);
      res.status(500).json(e);

  }
});





module.exports = router;