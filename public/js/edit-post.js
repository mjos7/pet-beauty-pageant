async function editFormHandler(event) {
  event.preventDefault();

  // Edit post based by post ID
  const name = document.querySelector('input[name="post-name"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

// Event listeners
document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
