const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('models'))

//app.get('/', (req, res) => {
  //res.send('Hello World!')
//})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})