const express = require("express")
const characters = require("./characters.json")

const app = express()

const PORT = 4000

app.get("/", (req, res, next) => {
  res.send("Hello fromm Express server")
})

app.get("/message", (req, res, next) => {
  const message = `<h1>Hello</h1>`
  res.send(message)
})

app.get("/characters", (req, res, next) => {
  res.send(characters)
})

app.get("/characters/:id", (req, res, next) => {
  const { id } = req.params
  // console.log(typeof(id))
  const charById = characters.find(char => char.id === parseInt(id))

  if (!charById){
    res.status(404).send("Character not found")
  }

  res.send(charById)
})

app.get("/char/:blood", (req, res, next) => {
  const { blood } = req.params
  const charByBlood = characters.filter(char => char.blood.toLowerCase() === blood.toLowerCase())
 
  if (charByBlood.length < 1){
    res.status(404).send("No characters with the provided blood type")
  } else {
    res.send(charByBlood)
  }
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))