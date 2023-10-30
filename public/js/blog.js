const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#contents').value.trim();
  
    if (title && contents) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      //TODO: check location, add second location?
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      //TODO: Check link
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-blog')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);