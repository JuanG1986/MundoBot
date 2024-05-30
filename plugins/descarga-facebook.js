import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

var handler = async (m, { conn, args, command, usedPrefix, text }) => {

let vid
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)

async function reportError(e) {
await conn.reply(m.chat, `『❌』𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`, m, )
console.log(`『⚠️』𝙀𝙧𝙧𝙤𝙧, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.\n`)
console.log(e)
}

switch (true) {   
case isCommand7:
if (!text) return conn.reply(m.chat, `『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠.\n\n𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n• ${usedPrefix + command} *https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz*`, m, )
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) return conn.reply(m.chat, '『❌』𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙪𝙨𝙖 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠.', m, )
await conn.reply(m.chat, '『🌌』𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤...', m, )
m.react('🎉')
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case 'groups':
message = ''
break
case 'reel':
message = '『🎉』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤.'
break
case 'stories':
message = '『🎉』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤.'
break
case 'posts':
message = '『🎉』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤.'
break
default:
message = '『🎉』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤.'
break
}
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=BrunoSobrino&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `*${message}*`, m)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `*${message}*`, m)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `*${message}*`, m)
} catch (e) {
reportError(e)}
}}}

}
handler.help = ['fb']
handler.tags = ['descargas']
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i

handler.register = true
//handler.diamond = true

export default handler

function checkMessageType(url) {
if (url.includes('www.facebook.com')) {
if (url.includes('/groups/')) {
return 'groups'
} else if (url.includes('/reel/')) {
return 'reel'
} else if (url.includes('/stories/')) {
return 'stories'
} else if (url.includes('/posts/')) {
return 'posts'
}}
return 'default'
}
