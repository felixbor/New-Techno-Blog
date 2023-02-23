async function editFormHandler(event) {
    event.preventDefault();
  
   
    // Get the post title and post text from the form
    const title = document.querySelector("#blog-name").value;
    const content = document.querySelector("#blog-desc").value;
  
    // use the update route to update the post
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    // if update  is successful, redirect to the dashboard page, otherwise display  error
    if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
  
  }
  
  document.querySelector('.edit-blog-form').addEventListener('submit', editFormHandler);