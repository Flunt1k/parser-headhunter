const form = document.querySelector('#regForm')

form.addEventListener('submit', registration)

async function registration(e) {
  e.preventDefault()
  const {email, password, name, group1} = e.target
  const body = {
    email: email.value,
    password: password.value,
    name: name.value,
    radioSelected: group1.value
  }

  const res = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const result = await res.json()
  if (result.success) {
    window.location = '/'
  } else {
    const message = document.createElement('p')
    message.textContent = result.message
    form.append(message)
  }
}
