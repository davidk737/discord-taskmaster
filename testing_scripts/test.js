const Discord = require('discord.js')
const client = new Discord.Client()

var guild

client.on('ready', () => {
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
        var guild = guild.id    
    })

    guild = client.guilds.get("548723548680880129")
    console.log(guild.id)

    
    role = guild.roles.find("name", "RATINGS")   
    
   
    var ratingsChannel = client.channels.get("548725503423676417")

    ratingsChannel.send("<@&" + role.id + "> Time to report your ratings!")
    client.destroy()
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTUwNTI0MjU3MDA0ODE0MzU5.D1jtkA.XN_IBX3zV7wUoIxVLOXMebe5Y9o"

client.login(bot_secret_token)