let handler = async m => m.reply(`


╭─「 Donasi • Pulsa dan Dana 」
│ •  [085172446692]
│ •  [085172446692]
╰────

    
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
