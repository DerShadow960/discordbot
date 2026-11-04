const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessages,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online.`)
});

client.on('messageCreate', (msg) => {
  console.log(msg);
});


client.login(process.env.DISCORD_TOKEN);
