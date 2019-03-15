//This is the main bot script that send daily reminders to the ratings channel.
const Discord = require('discord.js')
const client = new Discord.Client()

var timezone = process.argv[2] // Gets a string from the command line arguments to specifiy which  timezone to alert
console.log(timezone)

var guild
var role

client.on('ready', () => {
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
        var guild = guild.id    
    })

    //Selects the guild  and channel based on a hardcoded guild channel id's. 
    //guild ID was fetched above, and I selected the correct channel id from the list output by testing_scripts/channel-getter.js

    guild = client.guilds.get("548723548680880129")
    var ratingsChannel = client.channels.get("548725503423676417")
    console.log(guild.id)

    // Select the timzone role that was chosen in the cli options for the script
    switch (timezone) {
        case "US-EAST":
        role = guild.roles.find("name", "US-EAST")
        sendAlert()
        break

        case "INDIA":
        role = guild.roles.find("name", "INDIA")
        sendAlert()
        break

        case "RUSSIA":
        role = guild.roles.find("name", "RUSSIA")
        sendAlert()
        break

        default:
        break
    }    
   
    function sendAlert() {
        ratingsChannel.send("<@&" + role.id + "> Time to report your ratings!")
    }

    
    client.destroy()
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTUwNTI0MjU3MDA0ODE0MzU5.D1jtkA.XN_IBX3zV7wUoIxVLOXMebe5Y9o"

client.login(bot_secret_token)
