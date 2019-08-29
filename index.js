const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var visits = 0;

  const server = http.createServer((req, res) => {

        console.log('New connection');
        visits++;
        res.writeHeader(200, { 'Content-type':'text/html' } );
        res.write('Hello\n');
        res.write('We have had '+visits+' visits ' + hostname);
        res.end();

    });

    server.listen(port, hostname, () => {
      console.log('Server Started on port '+port);
    });
