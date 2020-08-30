const button = document.querySelectorAll('.additional')
const desc = document.querySelector('#desc');
const exp = document.querySelector('#exp');
const loc = document.querySelector('#loc');

button.forEach(b => b.addEventListener('click', async (e) => {
  e.preventDefault();
  desc.innerHTML = '';
  exp.innerHTML = '';
  loc.innerHTML = '';

  const {id} = e.target;

  const response = await fetch(`/info`, {
    method: 'post',
    headers: {'Content-Type': 'Application/json'},
    body: JSON.stringify({id})
  });

  const result = await response.json();
  desc.innerHTML = result.description;
  exp.innerHTML = result.experience;
  loc.innerHTML = result.location;
}))
