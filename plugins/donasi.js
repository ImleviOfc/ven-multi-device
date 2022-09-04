let handler = async m => m.reply(`


〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕

››╭─〘 *Donasi* 〙
╭╡📮: Donasi ngab jgan gunain doang.
│┝‷✧ *Dana:* [085172446692]
│┝‷✧ *Pulsa:* [085172446692]
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor owner
╰──────────···───╮

    
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
