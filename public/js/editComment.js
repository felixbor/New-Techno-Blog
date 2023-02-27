
async function editFormHandler(event) {
  event.preventDefault();



  // Get the comment text from the form
  
  const comment = document.querySelector("#comment").value;
  const id = event.target.getAttribute('data-id')
  // use the update route to update the post
  const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        comment
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
};


// delete comment  from dashboard page
const delButtonHandler = async (event) => {
  console.log("delete button")
  event.preventDefault()
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document.querySelector('#update')
  .addEventListener('click', editFormHandler);

  document
  .querySelector('#delete-comment')
  .addEventListener('click', delButtonHandler);
