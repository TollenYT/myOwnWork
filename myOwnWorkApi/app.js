const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const myOwnWorkRouter = require("./routes/myOwnWorkRouters");
const app = express();
const port = 3000;

app.use(cors())

// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// *** ADD ***
app.use('/api/myOwnWork', myOwnWorkRouter);

app.use('/api', (req, res) => {
  console.log('requested index api')
  res.send('api')
});


// Start the server
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});