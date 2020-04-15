import {execSync} from 'child_process';
import express from 'express';

const app = express();

const PORT = 3000;

console.log('🚀 Starting server!');

const localIp = execSync('ipconfig getifaddr en0').toString().trim();

console.log(`\t🎒 Available on your network at ${localIp}:${PORT}`);

app.get('/', function (req, res) {
  console.log('Found a request');
  res.send('Hello World');
});

app.listen(PORT, localIp);
