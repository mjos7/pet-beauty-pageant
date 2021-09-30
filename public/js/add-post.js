async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="post-name"]').value;
  const pet_type = document.querySelector('input[name="pet_type"]').value;
  const image = document.querySelector('input[name="image"]').value;
  const formData = new FormData();

  formData.append('name', name);
  formData.append('pet_type', pet_type);
  formData.append('image', image);

console.log(formData, name, pet_type, image);

//   const response = await fetch(`/api/posts`, {
//     method: 'POST',
//     body: formData,
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert(response.statusText);
//   }
// }

const imageInput = await fetch(`/image/upload-images`, {
  method: 'POST',
  body: formData,
})
if (imageInput.ok) {
  document.location.replace('/dashboard');
} else {
  alert(imageInput.statusText);
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler)
};
