const getPage = require('./getPage')

async function getDescription(url) {
  const $ = await getPage(url)
  const location = $('[data-qa="vacancy-view-location"]').text()
  const experience = `Требуемый опыт работы  ${$(
      '[data-qa="vacancy-experience"]').text()}`
  const description = $('[data-qa="vacancy-description"]').text()
  return {
    experience,
    description,
    location,
  }
}

module.exports = getDescription
