const path = require('path')
const crypto = require('crypto')
const KEY = '116969808b3946b392f0539faeb463ff'
const USER_ID = 'HE1811232057541664'
const $={
  generateSignature: (params)
   => {
    params.username = USER_ID
    let data =
      Object.keys(params)
        .filter((key) => {
          return params[key] !== '' && key !== 'sign' && key !== 'key'
        })
        .sort()
        .map((key) => {
          return `${key}=${params[key]}`
        })
        .join('&') + KEY
    return crypto.createHash('md5').update(data).digest('base64')
  },

}
module.exports= $
