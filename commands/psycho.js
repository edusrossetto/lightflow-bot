const clientConfig = require('../clientConfig');

clientConfig.getClient().on('message', message => {
    if (message.content === '$psycho') {  
      message.channel.send('My pain is constant and sharp, and I do not hope for a better world for anyone. In fact, I want my pain to be inflicted on others. I want no one to escape. But even after admitting this, there is no catharsis; my punishment continues to elude me, and I gain no deeper knowledge of myself.');
    }
  });