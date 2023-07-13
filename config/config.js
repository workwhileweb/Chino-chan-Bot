const NodeCache = require('node-cache')

const config = {
  prefix: '/',
  openaikey: require('C:\\Users\\workw\\Downloads\\txt\\12072023\\config.json')
    .openai.token,
  cache: new NodeCache({
    checkperiod: 10000,
    deleteOnExpire: true
  }),
  ratelimit: new Map(),
  commands: new Map(),
  aliases: new Map()
}

module.exports = config
