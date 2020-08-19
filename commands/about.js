var ids = '531186390717825074';
module.exports = {
  catagory: 'bot',
  name: 'about',
  description: 'Get Info About The Bot!',
  execute: async (message, args, client, db, packageInfo, Discord) => {
   message.delete();
  const embed = new Discord.MessageEmbed()
  .setColor(7506394)
  .addField('Brandgrand!bot', `════════════════════════`)
  .addField('Brandgrand!bot Is A Simple Bot Made With Discord.js!', `It Has:\nMany Command You Would Love!\nIt's A Simple Bot That Every Server Needs!\nGet It Now! Or You Will Miss Out!`)
  .addField('════════════════════════', `\u200B`)
  .addField('Mod Commands!', '``/ban``, ``/Kick``, ``/Mute``, ``/nick``, And ``/purge``')
  .addField('Fun Commands!', '``/8ball``, ``/work``, ``/bal``, ``/coinflip``, ``/dadjoke``, And ``/today``')
  .addField('Util Commands!', '``/announce``, ``/emoji``, ``/say``, ``/whois``, And ``/serverinfo``')
  .addField('And More!', 'New Stuff Added Regulary!')
  .addField('════════════════════════', `[Invite The Bot](https://discord.com/api/oauth2/authorize?client_id=738504985138036738&permissions=8&scope=bot)\n[Join Support Server](https://discord.gg/525PbHt)`)
  .setImage('https://fontmeme.com/permalink/200814/6a3a8ac131dbc5da6c285ff9d0291e96.png')
  .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);

  message.channel.send({embed});
  }
};
