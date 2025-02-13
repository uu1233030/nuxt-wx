const config = require('../config')
export default function ({ store, redirect }) {
  if (!store.state.accessToken) {
    // 微信后台设置回调地址，以下是我的地址，你的可能会不同
    const url = encodeURIComponent(`${config.origin}/callback`)
    redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7bb4ec736bf5b029&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`)
  }
}

