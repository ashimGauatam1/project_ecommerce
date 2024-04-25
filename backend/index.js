const mongoConnect=require('./db');
const express = require('express')
const cros=require('cors');
mongoConnect();
const app = express()
const port = 8080


app.use(cros());

app.use(express.json());
app.use('/auth',require('./modules/auth'));
app.use('/verify',require('./modules/verify'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})