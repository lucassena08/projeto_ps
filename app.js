const bodyParser = require('body-parser')
const fs = require('fs')
const express = require('express')

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/:foo", (req, res) => {
  const foo = req.params.foo

  if (foo === 'favicon') return

  res.sendFile(__dirname + "/views/" + foo + ".html")
})

app.post("/", (req, res) => {
  const banco = JSON.stringify(req.body)

  fs.writeFile('./banco.json', banco, (err) => {
    if (!err) console.log('Criando banco.json')
  })

  res.redirect("/informacoes-investimento")
})

app.listen(3000, () => {
  console.log("Server stated on port 3000.")
})