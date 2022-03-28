const clientConfig = require('../clientConfig');
 
 clientConfig.getClient().on('message', async message => { 
    if (message.content.startsWith('$') ){
        
        if(!message.channel.name.toLowerCase().includes('test')) {
            const fetched = await message.channel.messages.fetch({
                limit: 2,
                });
            message.channel.bulkDelete(fetched);
        }
    }
});