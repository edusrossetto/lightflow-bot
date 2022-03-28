const clientConfig = require('../clientConfig');

clientConfig.getClient().on('message', message => {
    if (message.content === '$clean') {
        const channel = message.channel;
        channel.messages.fetch({ limit: 100 }).then(messages => {
            console.log(`Received ${messages.size} messages`);
            //Iterate through the messages here with the variable "messages".
            messages.forEach((message)=>message.delete())
          })
    }
  });