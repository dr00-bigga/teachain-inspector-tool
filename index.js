const teachain_inspector_tool = require('teachain-inspector-tool');
const teachain_probability = require('teachain-probability');
const ethereumjs_util = require('ethereumjs-util');
const lodash = require('lodash');
const underscore = require('underscore');
const nodemon = require('nodemon');
const commander = require('commander');
const ipfs_http_client = require('ipfs-http-client');
const truffle = require('truffle');
const dotenv = require('dotenv');
const socket.io = require('socket.io');
const axios = require('axios');
const debug = require('debug');
const web3 = require('web3');

const https = require('https');
const options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/api/data',
  method: 'GET'
};
const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Response data:', data);
  });
});
req.end();

// Convert a string to title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
console.log('Title case:', toTitleCase('hello world'));

const path = require('path');
console.log(`Current working directory: ${path.resolve()}`);

console.log('Logging a message to the console.');

// Get the list of supported Ethereum networks
web3.eth.net.getNetworkType().then(networkType => {
  console.log('Network type:', networkType);
}).catch(err => {
  console.error('Error getting network type:', err);
});

// Convert a CSV string to an array of objects
const csvString = `Name, Age, Country\nJohn Doe, 30, USA\nJane Smith, 25, Canada`;
const csvToArray = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(value => value.trim());
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index];
    });
    data.push(entry);
  }
  return data;
}
console.log('CSV to Array:', csvToArray(csvString));

// Validate an email address using a regular expression
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log('Is Email Valid:', validateEmail('example@email.com'));

const querystring = require('querystring');
const qs = querystring.parse('name=Node.js&company=NodeSource');
console.log(qs);