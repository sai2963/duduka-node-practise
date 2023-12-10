const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/subfolder/four.txt');

    fileStream.on('open', () => {
        fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
        res.end(err); // You might want to handle errors more gracefully, sending an error response instead of the raw error message.
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
