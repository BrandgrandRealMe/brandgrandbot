var ids = ['465564943065022475', '531186390717825074'];
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'util',
  name: 'announceset',
  description: 'Sets Announcement Channel',
  usage: 'announceset <#channel>',

  execute: async (message, args, client, db, packageInfo, Discord) => {
       if (!message.member.hasPermission('MANAGE_GUILD') && !ids.includes(message.author.id)) return message.reply('You dont have permission to do that!');
    let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    const filter = m => message.author.id === m.author.id;
    db.set(`annchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`Announcement Channel is set to ${channel}!`) //send success message
  }
};