const springedge = require('springedge');

const params = {
    // 'apikey': process.env.SMS_API, // API Key
    'apikey': '62659c5asfu4zvd7898g1kj013e77it8v', // API Key
    'sender': 'SEDEMO', // Sender Name
    'to': [
        '998993017445'  //Mobile Number
    ],
    'message': 'Hello, This is a test message from spring edge',
    'format': 'json'
};

springedge.messages.send(params, 5000, function (err, response) {
    if (err) {
        return console.log(err);
    }
    console.log(response);
});
