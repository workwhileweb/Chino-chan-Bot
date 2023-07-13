const { Client } = require('messenger-api.js')
const client = new Client({ online: true })
const fs = require('fs')

client.on('ready', bot => {
  for (const file of fs.readdirSync('./handlers')) {
    if (!file.endsWith('.js')) continue
    require(`./handlers/${file}`)(bot)
  }

  console.log(`${bot.user.username} đã online.`)
})

const fb = require('C:/Users/workw/Downloads/txt/12072023/fbstate.json')
client.login(fb, true)
