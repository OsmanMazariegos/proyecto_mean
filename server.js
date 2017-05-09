var express = require('express'); // Express
var app = express(); //Variable app para llamar a express
// Ruta a la raíz de nuestra aplicación , cuando entremos a nuestro navegador va a reponder con este codigo

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res) {
res.send('\
  <!DOCTYPE html>\
    <html>\
      <head>\
	       <title>MEAN Ejemplo</title>\
      </head>\
      <body>\
	       <h1>Hello World</h1>\
      </body>\
   </html>\
');
});

app.listen(PORT, function() {
console.log('Corriendo Servidor ' + PORT);
});
