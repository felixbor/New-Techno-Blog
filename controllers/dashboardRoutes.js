const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');



// get all post
router.get('/', async (req, res) => { 
  try {
      const postData = await Post.findAll(
        Post.findAll({
          where: {
            user_id: req.session.user_id,
          },
          attributes: ['id', 'title', 'created_at', 'post_content'],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username'],
              },
            },
            {
              model: User,
              attributes: ['username'],
            },
          ],
        })
      );
      const posts = postData.map(post => post.toJSON());
       // render to 
       res.send(posts)
      res.status(200).render('dashboard', { posts,logged_in: true });
     
       } catch (err) {
       res.status(500).json(err);       }
});


router.get('/editPost/:id', withAuth, async (req, res) => {
  
  try {
      const updatePost = await Blog.findByPk(req.params.id);
      console.log(updatePost);

      if (updatePost) {
  
        const post = updatePost.get({ plain: true });

        res.render('editPost', {
          ...post,
          logged_in: true
        });
      }
      res.status(200).json(updatePost);
  } catch (e) {
      console.log(e);
      res.status(500).json(e);

  }
});





module.exports = router;