const clientConfig = require('../clientConfig');

clientConfig.getClient().on('message', message => {
    if (message.content === '$status') {  
      message.channel.send(`${Date.now() - message.createdTimestamp}ms de latência. ${Math.round(clientConfig.getClient().ws.ping)} ms de latência da API`);
    }
  });

  
 