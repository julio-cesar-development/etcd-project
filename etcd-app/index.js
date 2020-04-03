const express = require('express');

const port = process.env.API_PORT || 8200;
const app = express();

require('./routes/user.js')(app);
require('./routes/healthcheck.js')(app);

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});
