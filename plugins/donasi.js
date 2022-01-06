let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [088233832771]
│ • Dana [088233832771]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6288233832771
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
