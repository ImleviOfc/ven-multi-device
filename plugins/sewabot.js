let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6285172446692@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` 「 ཌ✼ᴠᴇɴ-ʙᴏᴛᴢ✼ད 」

╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _3k/grup (1 minggu)_
┊⫹⫺ *Normal:* _5k/grup (1 bulan)_
┊⫹⫺ *Standar:* _10k/grup (2 bulan)_
┊⫹⫺ *Pro:* _35k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _65k/grup (6 bulan & 1 bulan *Premium*)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _3k (1 minggu)_
┊⫹⫺ *Normal:* _10k (1 bulan)_
┊⫹⫺ *Pro:* _40k (4 bulan)_
┊⫹⫺ *Vip:* _50k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _999k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa:* [085172446692]
• *Dana:* [085172446692]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah

▌│█║▌║▌║║▌║▌║█│▌ 
  

☞𝑜𝑤𝑛𝑒𝑟 ❀wa.me/${owner[0]}♨️

*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6285172446692@s.whatsapp.net`
  },
  footerText: '',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
