const bodyParser = require('body-parser')
const fs = require('fs')
const express = require('express')

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html")
})

app.get("/:foo", (req, res) => {
  const foo = req.params.foo

  if (foo === 'favicon') return

  res.sendFile(__dirname + "/public/views/" + foo + ".html")
})

app.post("/", (req, res) => {
  res.redirect("/informacoes-investimento")
})

app.listen(3000, () => {
  console.log("Server stated on port 3000.")
})