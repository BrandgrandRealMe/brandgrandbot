var ids = '531186390717825074';
module.exports = {
    catagory: 'bot',
    name: 'help',
    description: '(The one you just ran!) List of all commands!',
      aliases: ['?', 'cmds'],
    execute(message, args, client) {
const commands = client.commands;
      const data = [];
      if (args[0]) {const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return message.reply('That\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** -${command.name} ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true })} else {
      const cArray = client.commands.array();
      data.push(commands.map(command => command.name));
      console.log(data + ' data')
      //Create the embeds
      const Discord = require('discord.js');
      const MessageEmbed = Discord.MessageEmbed;
      const ownerEmbed = new MessageEmbed()
      .setTitle('Owner Commands')
      .setDescription('\u200B');
      const mainEmbed = new MessageEmbed()
      .setTitle('Brandgrand!bot Help')// the ‎ does not show up i think
      .setDescription('Brandgrand!bot Is A Bot Made by Brandgrand!real It is written with Discord.js.\nIf You Need Support Please Do One Of The Following:\nDM <@740270451754008638>\nJoin: https://discord.gg/C4bvPw');
      const funEmbed = new MessageEmbed()
      .setTitle('Fun Commands‎')// the ‎ does not show up i think
      .setDescription('\u200B');
      const modEmbed = new MessageEmbed()
      .setTitle('Mod Commands')// the ‎ does not show up i think
      .setDescription('\u200B');
      const utilEmbed = new MessageEmbed()
      .setTitle('Util Commands')// the ‎ does not show up i think
      .setDescription('\u200B');
      const miscEmbed = new MessageEmbed()
      .setTitle('Misc')// the ‎ does not show up i think
      .setDescription('\u200B');
      data.forEach(cmdd => {
cmdd.forEach(cmd => {
  var catagory = commands.get(cmd).catagory;
   var dsc = commands.get(cmd).description;
   if (catagory === 'fun')
     {funEmbed.addField(cmd, dsc, true)}
     else if (catagory === 'mod')
        {modEmbed.addField(cmd, dsc, true)}
     else if (catagory === 'util')
        {utilEmbed.addField(cmd, dsc, true)}
     else if (catagory === 'owner')
        {ownerEmbed.addField(cmd, dsc, true)}
     else if (catagory === 'bot')
        {mainEmbed.addField(cmd, dsc, true)}
     else 
        {miscEmbed.addField(cmd, dsc, true)}
      });
      message.channel.send(mainEmbed);
      message.channel.send(funEmbed);
      message.channel.send(utilEmbed);
      if (message.member.hasPermission('MANAGE_MESSAGES') | ids.includes(message.author.id))
      message.channel.send(modEmbed)
      if (ids.includes(message.author.id))
      message.channel.send(ownerEmbed);
        });
  
         }
}
};
