const select = document.querySelector('select')

select.addEventListener('change', showSort)

async function showSort(e) {
  const selected = e.target.options[e.target.selectedIndex].value
  const encoded = encodeURI(selected)
  let url = window.location.href
  if (url.includes('&profession')) {
   url = url.slice(0, url.indexOf('&'))
  }
  window.location = `${url}&profession=${encoded}`
}
