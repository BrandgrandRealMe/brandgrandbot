var ids = '531186390717825074';
const dadjoke = require('../data/dadjoke.json');
module.exports = {
  catagory: 'owner',
  name: 'dadjokelist',
  description: 'Get the list of dadjokes! OWNER ONLY!',
  usage: 'dadjokelist',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    if (!ids.includes(message.author.id)) return;
    message.channel.send(`${message.author.toString()} Ok!`);
    const embed = new Discord.MessageEmbed()
      .setColor(7506394)
      .addField('DADJOKE List!', 'The Jokes Are Good!')
      .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
    message.channel.send(embed)
    var i, j, temparray, chunk = 25;
    array = dadjoke.jokes
    for (i = 0, j = array.length; i < j; i += chunk) {
      temparray = array.slice(i, i + chunk);
    message.channel.send(temparray)
    }

    message.channel.send(`${message.author.toString()} Done!`);
  }

};