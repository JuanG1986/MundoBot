import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙤 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙫𝙖𝙡𝙞𝙙𝙤.\n\n𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n• *${usedPrefix + command} Erika Lundmeon - Yad*\n• *${usedPrefix + command} https://youtube.com/watch?v=NMxZcxbQ-Zg*`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `No encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎉') 
  let play = `
『👀』𝙀𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤!!! 🎉
DURACION: ${vid.timestamp}
VISTAS: ${vid.views.toLocaleString()}
LINK: ${url}
▫ •─────────────• ▫ 
𝙋𝙖𝙧𝙖 𝙫𝙚𝙧 𝙢𝙖𝙨 𝙫𝙞𝙙𝙚𝙤𝙨 𝙘𝙤𝙢𝙤
𝙚𝙨𝙩𝙚, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:
${usedPrefix}playlist ${vid.title}`
 await conn.sendButton(m.chat, play, wm, thumbnail, [
    ['𝐀𝐔𝐃𝐈𝐎 🎶', `${usedPrefix}playaudio ${url}`],
    ['𝐕𝐈𝐃𝐄𝐎 📹', `${usedPrefix}playvideo ${url}`],
    ['𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐂 🔥', `${usedPrefix}playdoc ${url}`],
    ['𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐂 💥', `${usedPrefix}playdoc2 ${url}`],
 ], null, [['Canal', `${channel}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['dlav', 'downav']
handler.disabled = false

export default handler

	 
