const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name + " " + guild.id)

        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })

        guild.roles.forEach((role) => {
            console.log(` -- ${role.name}  - ${role.id}`)
        })

    })
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTUwNTI0MjU3MDA0ODE0MzU5.D1jtkA.XN_IBX3zV7wUoIxVLOXMebe5Y9o"

client.login(bot_secret_token)