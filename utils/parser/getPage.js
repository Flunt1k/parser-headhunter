const request = require('request')
const cheerio = require('cheerio')

module.exports = async function(url) {
  return new Promise(((resolve, reject) => {
    request({
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
      },
    }, async (err, response, body) => {
      if (err) return reject(err)
      return resolve(cheerio.load(body, {decodeEntities: false}))
    })
  }))
}


