module.exports = {
    catagory: 'bot',
    name: 'invite',
    description: "DMs you the bot\'s invite link. If You Want It Sent Here Use ``/about``!",
     execute: async(message, args, client) => {
      //Create the embed
      const Discord = require('discord.js');
              const embed = new Discord.MessageEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .setTitle("Brandgrand!bot Invites:", '')
  .addField('Main Server:', `${process.env.SERVERINVITE}`)
  .addField('Support Server:', `${process.env.SUPPORTINVITE}`)
  .addField('Bot Invite:', `${process.env.BOTINVITE}`)
  message.author.send({embed}).catch(e =>{
    if (e) {
    message.channel.send(`Error. You seems to be locking your DMs so I'll send it here instead.`);
    message.channel.send({embed});
    }
  });
  message.reply("Check your DMs!");  
    }
}
