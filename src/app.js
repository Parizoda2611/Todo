const express = require('express')
const router = require('./routes')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8000
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server listen on PORT: ${PORT}`);
})