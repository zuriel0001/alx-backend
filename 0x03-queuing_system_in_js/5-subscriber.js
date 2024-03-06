import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();

//Log message on connect
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

//Error message
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

//subscribe to the channel holberton school channel.
client.subscribe('holberton school channel');

//When the message is KILL_SERVER, it should unsubscribe and quit
client.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
});

async function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    client.publish('holberton school channel', message);
  }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
