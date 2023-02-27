const router = require('express').Router();
const { Post, Comment,User} = require('../models');
const withAuth = require('../utils/auth');



// get all post
router.get('/', withAuth,async (req, res) => { 
  console.log("dashboardruote")
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
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
      res.status(200).render('dashboard', { user,posts,logged_in: true });
     
       } catch (err) {
        console.log(err)
       res.status(500).json(err);       }
});


router.get('/editPost/:id', withAuth, async (req, res) => {
  
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
      const updatePost = await Post.findByPk(req.params.id);
      console.log(updatePost);

      if (updatePost) {
  
        const post = updatePost.get({ plain: true });

        res.render('editPost', {
          user,
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
router.get('/editComment/:id', withAuth, async (req, res) => {
  
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
      const updateComment = await Comment.findByPk(req.params.id);
      console.log(updateComment);

      if (updateComment) {
  
        const comment = updateComment.get({ plain: true });

        res.render('editComment', {
          user,
          comment,
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