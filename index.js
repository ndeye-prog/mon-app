const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Serveur demarre sur le port ${PORT}`));
}

module.exports = app;