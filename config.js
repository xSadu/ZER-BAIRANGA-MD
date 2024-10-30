const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://imgur.com/a/ydovE9P",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello... 👋 Im Zer Bairanga 😌🤝 Im alive now...!",
};
