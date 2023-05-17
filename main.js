const { Client, Intents } = require('discord.js');
global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

 client.config = require('./config');

require('./src/loader');

client.login("MTA2OTIwNDAxODIzODM0NTMyNw.G640uM.XPB-bTAtE10O-K07pZRpbvFwKxJo4NkACuEoVs"); 
