async function editFormHandler(event) {
    event.preventDefault();
  
    // get the blog id from the url
    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];
  
    // if (event.target.hasAttribute('data-id')) {
    //   const id = event.target.getAttribute('data-id')
  
    // Get the post title and post text from the form
    const title = document.querySelector("#blog-name").value;
    const content = document.querySelector("#blog-desc").value;
  
    // use the update route to update the post
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    // if the edit action is successful, redirect to the dashboard page, otherwise display the error
    if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
  
  }
  
  document.querySelector('.edit-blog-form').addEventListener('submit', editFormHandler);