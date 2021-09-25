async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="post-name"]').value;
  const pet_type = document.querySelector('input[name="post-pet_type"]').value;
  // const image = document.querySelector('input[name="post-image"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      pet_type,
      // image,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
