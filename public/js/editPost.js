async function editFormHandler(event) {
    event.preventDefault();
  
   
    // Get the post title and post text from the form
    const title = document.querySelector("#blog-name").value;
    const content = document.querySelector("#blog-desc").value;
   const id =document.querySelector("#blog-name").dataset.id;
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
  const formbtn =document.querySelector('#edit-blog-form')
  if(formbtn){

 formbtn.addEventListener('submit', editFormHandler);}