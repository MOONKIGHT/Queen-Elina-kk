const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:SANDUN [QUEEN-ELINA]\n' // full name
            + 'ORG:Queen-Elina;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=94761905764:+94 761905764\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "SANDUN [QUEEN-ELINA]", vcard: vcard}, MessageType.contact)
}))
