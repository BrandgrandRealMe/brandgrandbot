var ids = '531186390717825074';
module.exports = {
  catagory: 'fun',
  name: 'coinflip',
  description: 'flip a coin!',
  usage: 'coinflip',
  execute: async (message, args, client, db, packageInfo, Discord) => {
     var coin = ['https://fontmeme.com/permalink/200817/bfc06bf3eba978e8b390719f9dd4632b.png', 'https://fontmeme.com/permalink/200817/f3083ff5ace7f7bb5affb470aa03e3a2.png'][Math.floor(Math.random() * 2)]
        if (ids.includes(message.author.id)) {
      const embed = new Discord.MessageEmbed()
        .setColor(7506394)
        .setTitle("<:logo:744624310294937672> " + message.author.username + " (BOT OWNER) | Flipped A Coin!")
        .setImage(coin)
        .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
      message.channel.send(embed);
      message.delete();
    }
    else{
    const embed = new Discord.MessageEmbed()
   	.setTitle(message.author.username + " | Flipped A Coin!")
	  .setImage(coin)
      .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
    message.channel.send(embed);}
  }
};