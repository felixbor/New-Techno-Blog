const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



// create a new  post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update existing post
router.put('/:id', withAuth, async (req, res) => {
  
  try {
    const updatePost = await Post.update(
      {
        user_id: req.session.user_id,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      });
    if (!updatePost[0]) {
      res.status(404).json({ message: 'Wrong post  id!' });
      return;
    }
    res.status(200).json(updatePost);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});


// delete  post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
      
    });

    if (!postData) {
      res.status(404).json({ message: 'Wrong post  id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(' ERROR', err);
    res.status(500).json(err);
  }
});


module.exports = router;