client.on('message', message => {
  if (message.content === '+ping') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "music",
  category: "System",
  description: "Bot will join the voice channel you're in.",
  usage: "music"
};
