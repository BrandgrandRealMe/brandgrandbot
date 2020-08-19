var ids = ['465564943065022475', '531186390717825074'];
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'util',
  name: 'welcomeset',
  description: 'Sets Welcome Channel',
  usage: 'welcome <#channel>',
  aliases: ['welcome'],
  execute: async (message, args, client, db, packageInfo, Discord) => {
       if (!message.member.hasPermission('MANAGE_GUILD') && !ids.includes(message.author.id)) return message.reply('You dont have permission to do that!');
    let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    const filter = m => message.author.id === m.author.id;
    db.set(`welchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`Welcome Channel is set to ${channel}, Now What Will The Message Be?`) //send success message
    message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
		.then(messages => {
			message.channel.send(`The Message Will Be: ${messages.first().content}`);
      db.set(`welmsg_${message.guild.id}`, messages.first().content)

		})
		.catch(() => {
			message.channel.send('You did not enter any input!');
		});
  }
};