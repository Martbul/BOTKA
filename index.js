const Discord = require('discord.js')
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'] })
const config = require("./config.json");


let prefix = 'botka '


client.on('ready', () => { console.log('Ready!') })


client.on('messageCreate', (message) => {
    if (message.content.includes("шаран"))
        message.channel.send('никола')
})


client.login(config); 