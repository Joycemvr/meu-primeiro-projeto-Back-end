const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraHora(request, response){
    const data = new Date()
    const hora = data.toLocaleTimeString("pt-BR")
    response.send(horanonavegador)
}

function mostraporta()
    console.log("Servidor criado e rodando na porta", porta)


app.use(router.get("/Hora", mostraHora))
app.listen(PORTA, mostraPorta)
