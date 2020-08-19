var ids = '531186390717825074';
module.exports = {
  catagory: 'mod',
  name: 'purge',
  description: 'Delete up to 99 messages at the same time!',
  usage: '<@user 10> or <24>',
  aliases: ['clear', 'clean'],
  execute: async (message, args, client, db, packageInfo, Discord) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES') && !ids.includes(message.author.id)) return message.reply('You dont have permission to do that!');
    if (!message.mentions.users.size) {
      if (parseInt(args[0]) + 1 > 100 || parseInt(args[0]) + 1 === 100) return message.reply('I cannot clear that much messages')
      message.channel.bulkDelete(parseInt(args[0]) + 1);
    }
  }
};
