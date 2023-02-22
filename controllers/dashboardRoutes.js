const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');





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