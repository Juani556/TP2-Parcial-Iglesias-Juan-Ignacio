import express from "express";
import Router from "./router/router.js";

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/numeros", new Router().start())

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`))

