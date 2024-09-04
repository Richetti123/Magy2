let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@comu.blessed\n@comu.blessed_fem ${pesan}`
let teks = `*💛DESPIERTEN, HAY ACTIVIDAD🧡*\n${oi}\n\n*MENCIONES:*\n`
for (let mem of participants) {
teks += `🩷💛 @${mem.id.split('@')[0]}\n`}
teks += `MagyBot`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
