// https://www.iana.org/assignments/media-types/media-types.xhtml

res.writeHead(200, {'Content-Type': 'text/plain'});
res.writeHead(200, {'Content-Type': 'text/html'});
res.writeHead(200, {'Content-Type': 'multipart/form-data'});

res.setHeader('Content-Type', 'application/javascript');
res.setHeader('Content-Type', 'application/json');
