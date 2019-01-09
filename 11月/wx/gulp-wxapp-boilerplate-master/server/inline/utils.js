const KEY = '2d0a7559a9d144cda3927be75589e20a'
const USER_ID = 'HE1811232057461648'
const path = require('path')
const crypto = require('crypto')

const $ ={
  generateSignature: (params) => {
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

module.exports = $