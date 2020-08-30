const formLogin = document.querySelector('#logForm')

formLogin.addEventListener('submit', login)

async function login(e) {
  e.preventDefault()
  const {email, password, group1} = e.target
  const body = {
    email: email.value,
    password: password.value,
    status: group1.value
  }

  const res = await fetch('/api/auth/login', {
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
    M.toast({html: result.message, classes: 'rounded'});
  }
}
