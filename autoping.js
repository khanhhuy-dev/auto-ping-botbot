const https = require('https');

const url = 'https://forward-bot-7err.onrender.com';
const interval = 30000; // 30 seconds

function ping() {
  https.get(url, (res) => {
    console.log(`[${new Date().toISOString()}] Pinged ${url} - Status: ${res.statusCode}`);
    res.on('data', () => {}); // Consume response data to free up memory
    res.on('end', () => {});
  }).on('error', (e) => {
    console.error(`[${new Date().toISOString()}] Error pinging ${url}: ${e.message}`);
  });
}

// Initial ping
ping();

// Ping every 30 seconds
setInterval(ping, interval);