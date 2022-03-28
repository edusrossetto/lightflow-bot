require("dotenv").config();

const {Client, Intents, MessageSelectMenu} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.TOKEN);

let connect;
let queue;
class clientConfig {

    //Executa login
    login(token) {
        client.login(token);

        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });
    }

    //Retorna client para uso externo
    getClient() {
        return client;
    }

    getConnection() {
        return connect;
    }

    setConnection(connection) {
        connect = connection;
    }

    getQueue(){
        return queue;
    }

    setQueue(){
        queue = queue;
    }
}

module.exports = new clientConfig;