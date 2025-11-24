const express = require('express');
const app = express();
app.get('/', (_req, res) => { res.send('SBOM/SCA demo (Node.js) — OK'); });
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
