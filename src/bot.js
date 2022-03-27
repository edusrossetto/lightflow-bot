require("dotenv").config();

const {Client, Intents, MessageSelectMenu} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.TOKEN);

client.on('message', message => {
    if (message.content === '$status') {  
      message.channel.send(`${Date.now() - message.createdTimestamp} Almas coletadas. E outras ${Math.round(client.ws.ping)} no inferno.`);
    }
  });
 client.on('message', message => {
    if (message.content === '$death') {  
        const channel = client.channels.cache.get("956613495175118848");
        channel.messages.fetch({ limit: 100 }).then(messages => {
            console.log(`Received ${messages.size} messages`);
            //Iterate through the messages here with the variable "messages".
            messages.forEach((message)=>message.delete())
          })
    }
  });
client.on('message', message => {
    if (message.content === '$psycho') {  
      message.channel.send('My pain is constant and sharp, and I do not hope for a better world for anyone. In fact, I want my pain to be inflicted on others. I want no one to escape. But even after admitting this, there is no catharsis; my punishment continues to elude me, and I gain no deeper knowledge of myself.');
    }
  });
client.on('messageCreate', async message => { 
    if (message.content.startsWith('$') ){
        
        if(!message.channel.name.toLowerCase().includes('test')) {
            const fetched = await message.channel.messages.fetch({
                limit: 2,
                });
            message.channel.bulkDelete(fetched);
        }
    }
});