const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/webhook-whatsapp', (req, res) => {
  const message = req.body.Body;
  const from = req.body.From;

  let response = 'Olá! Como posso te ajudar hoje?';

  if (message.toLowerCase().includes('ponto')) {
    response = 'Para registrar seu ponto, acesse o app Joinin ou envie sua localização aqui.';
  }

  res.set('Content-Type', 'text/xml');
  res.send(`
    <Response>
      <Message>${response}</Message>
    </Response>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
