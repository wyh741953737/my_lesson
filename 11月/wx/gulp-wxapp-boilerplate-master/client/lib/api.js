// 填写 env
const QQ_MAP_KEY = 'ZSWBZ-EYACV-UIXPK-UJRVF-SLSTF-6AFGN'

wx.cloud.init({
  env: ''
})

export const test = () => {
  return wx.cloud.callFunction({
    name: 'test',
    data: {
      a: 1,
      b: 3
    }
  })
}

export const test2 = () => {
  return wx.cloud.callFunction({
    name: 'test2'
  })
}

export const geocoder = (lat, lon, success = () => { }, fail = () => {}) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  })
}
