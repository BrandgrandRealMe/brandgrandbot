const fs = require('fs');
const Discord = require('discord.js');
const random = require('random');
const db = require('quick.db');
const axios = require('axios');
const cleverbot = require("cleverbot-free");
const Enmap = require("enmap");
const prefix = process.env.PREFIX;
const prefix2 = process.env.PREFIX2;
const token = process.env.TOKEN;
const https = require('https');
const express = require('express');
const app = express();
const owner = "531186390717825074";
const client = new Discord.Client
const ver = "Beta 2.0.0";
module.exports.client = client;

client.on("guildMemberAdd", (member) => { //usage of welcome event
  let chx = db.get(`welchannel_${member.guild.id}`); //defining var
  let msg = db.get(`welmsg_${member.guild.id}`);
  if(chx === null) { //check if var have value or not
    return;
  }

  let wembed = new Discord.MessageEmbed() //define embed
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor("#ff2050")
  .setThumbnail(member.user.avatarURL())
  .setDescription(msg);
  
  client.channels.cache.get(chx).send(wembed) //get channel and send embed
})

client.commands = new Discord.Collection();

const cooldowns = new Discord.Collection();

client.on("guildCreate", server => {
  let embed = new Discord.RichEmbed() // Makes a pretty embed
    .setTitle("Thanks for adding me to your server!")
    .setDescription("To Get Help Do ``/help`` Or Visit https://discord.gg/525PbHt")
    .setColor("RANDOM")
    .setFooter("© Brandgrand!bot Made by Brandgrand!real");
  server.owner.send(embed);
});
// command handling
const commandFolder = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

function r404 (res) {
  return res.sendStatus(404);
}
app.get('/cdn/:fname', (req, res) => {
 if (!fs.readFileSync('./cdn/' + req.params.fname)) r404(res)
 else
  res.sendFile(__dirname + '/cdn/' + req.params.fname);
});

for (const file of commandFolder) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
client.user.setActivity(`${client.guilds.cache.size} servers! | ( , / | /help`, { type: 'WATCHING' });
});
client.on('message', message => {       
	const args = message.content.slice(prefix.length).split(/ +/);
  if (!message.content.startsWith(prefix) && !message.content.startsWith(prefix2)) return;
	const commandName = args.shift().toLowerCase();
if (message.author.id == '675485335597350914') return; // SBT
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
  
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}
  if (message.guild) {
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '465564943065022475' && message.guild)
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  };
	try {
    const packageInfo = require('./package.json');
		command.execute(message, args, client, db, packageInfo, Discord);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
app.use(express.static("website/public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/website/pages/home.html");
});
app.get("/commands", (request, response) => {
  response.sendFile(__dirname + "/website/pages/commands.html");
});
app.listen(3000, () => console.log('Online!'));
client.login(token);