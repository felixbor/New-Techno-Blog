const newFormHandler = async (event) => {
    event.preventDefault();
  
    // taking  html   content
    const comment = document.querySelector('#blog-desc').value;
    const post_id = document.querySelector('#blog_id').textContent;
  
     // create and post new comment page
     if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('yee')
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  // event listener for buttons
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler)