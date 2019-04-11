
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/:Id", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
  //res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
