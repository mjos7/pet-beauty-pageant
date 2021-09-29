async function newFormHandler(event) {
  event.preventDefault();
  const formElem = document.querySelector('#post-form')
  const formData = new FormData(formElem);

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: formData,
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
