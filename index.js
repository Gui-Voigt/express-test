require('dotenv').config();
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

console.log(process.env.URL)

app.get('/', (req, res) => {

	let json = JSON.parse(fs.readFileSync(process.env.URL)) //não lê arquivos externos
	let response = `<html><head><title>Desafio</title></head><body>`

	json.forEach((item) => {

			response += `<h3>${item.albumId} / ${item.id} - ${item.title}</h3><img src='${item.url}'><br />`
		
	})

	response += `</body></html>`

	res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})