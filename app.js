const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/:foo", (req, res) => {
  const foo = req.params.foo

  res.sendFile(__dirname + "/views/" + foo + ".html")
})


app.listen(3000, () => {
  console.log("Server stated on port 3000.")
})