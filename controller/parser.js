const getMoreInfo = require('../utils/parser/getMoreInfo')
const parser = require('../utils/parser/parseHH')

module.exports.getMoreInfo = async function(req, res) {
  const {url} = req.body
  const response = await getMoreInfo(url)
  res.json(response)
}

module.exports.updateVacancies = async function(req, res){
  const {input, counter} = req.body
  const encoded = encodeURIComponent(input)
  const url =`https://hh.ru/search/vacancy?clusters=true&area=1&enable_snippets=true&salary=&st=searchVacancy&text=${encoded}`

  const result = await parser(url,  Number(counter), input, 'vacancy')
  res.json({
    result,
    success: true
  })
}

module.exports.updateCV = async function(req, res) {
  const {input, counter} = req.body
  const encoded = encodeURIComponent(input)
  const url =`https://hh.ru/search/resume?clusters=True&area=1&order_by=salary_desc&logic=normal&pos=full_text&exp_period=all_time&experience=moreThan6&no_magic=False&st=resumeSearch&text=${encoded}`

  const result = await parser(url, Number(counter), input)
  res.json({
    result,
    success: true
  })
}
