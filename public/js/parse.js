const parseVacancy = document.querySelector('[data-qa="vacancy"]')
const parseCv = document.querySelector('[data-qa="cv"]')
const valueToParse = document.querySelector('#search')
const counterValueToParse = document.querySelector('#email_inline')
const domparser = new DOMParser()
const container = document.querySelector('.load')
const loader = domparser.parseFromString('<div class="loader">\n' +
    '    <h4>Ожидайте</h4>\n' +
    '    <div class="progress">\n' +
    '        <div class="indeterminate"></div>\n' +
    '    </div>\n' +
    '</div>', 'text/html').body

parseCv.addEventListener('click', updateCv)
parseVacancy.addEventListener('click', updateVacancy)

async function updateCv(e) {
  e.preventDefault()
  const input = valueToParse.value
  const counter = counterValueToParse.value
  const body = {
    input,
    counter
  }
  e.target.disabled = true
  container.append(loader)

  const res = await fetch('/api/parser/cv', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const result = await res.json()
  container.removeChild(loader)
  e.target.disabled = false
  M.toast({html: 'База обнвавлена', classes: 'rounded'});
}

async function updateVacancy(e) {
  e.preventDefault()
  const input = valueToParse.value
  const counter = counterValueToParse.value
  const body = {
    input,
    counter
  }
  e.target.disabled = true
  container.append(loader)
  const res = await fetch('/api/parser/vacancy', {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(body)
  })
  const result = await res.json()
  container.removeChild(loader)
  e.target.disabled = false
  M.toast({html: 'База обнвавлена', classes: 'rounded'});
}
