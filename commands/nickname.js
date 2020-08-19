var ids = '531186390717825074';
const customisation = require('../customisation.json');
const fs = require("fs");
const ms = require("ms");
module.exports = {
  catagory: 'mod',
  name: 'nickname',
  description: 'nickname the mentioned user.',
  usage: 'nickname @user|userID newname',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    if (!message.member.hasPermission('MANAGE_NICKNAMES') && !ids.includes(message.author.id)) return message.reply('You dont have permission to do that!');
    let newname = args.slice(1).join(' ');
  let user;
  let mention = message.mentions.users.first();
  if (!mention){
    user = message.guilds.members.get(args[0])
    if (!user) return message.reply('You must Tag someone or give me a Valid userID for me to rename them.').catch(console.error);
  }else{
    user = message.guild.member(mention)
  }
  if (user.id === "531186390717825074" && message.author.id !== "531186390717825074") return message.reply("You can't rename my Developer:wink:");
  user.setNickname(newname).catch(e => {
    if(e) return message.channel.send(`An error occured: \`\`\`${e}\`\`\``)
  });
  message.channel.send("Done.");
  }
};