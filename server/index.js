// A APi cadastrará, lerá, atualizará e deletará funcionários, departamento e férias por funcionários. 
//Também Consultará as férias por departamento e por unidade.

const express = require("express")
const server = express()

//Post funcionáros
server.post("/funcionarios", function(req, res){
    res.send("Eu sou um post")
})
//GET funcionários
server.get("/funcionarios", function(req, res){
    res.send("Eu sou um GET")
})
//GET funcionários/:id
server.get("/funcionarios/:id", function(req,res){
    res.send("Eu sou um GET id")
})
//PUT funcionários/:id
server.patch("/funcionarios/:id", function(req,res){
    req.params.id
    res.send("Eu sou um patch por id")
})
//DELETE funcionários
server.delete("/funcionarios/:id", function(req,res){
    res.send("Eu sou um delete")
})

//Post departamentos
server.post("/funcionarios", function(req, res){
    res.send("Eu sou um post")
})
//GET departamentos
server.get("/funcionarios", function(req, res){
    res.send("Eu sou um GET")
})
//GET departamentos/:id
server.get("/funcionarios/:id", function(req,res){
    res.send("Eu sou um GET id")
})
//PUT departamentos/:id
server.patch("/funcionarios/:id", function(req,res){
    req.params.id
    res.send("Eu sou um patch por id")
})
//DELETE departamentos
server.delete("/funcionarios/:id", function(req,res){
    res.send("Eu sou um delete")
})

//Post férias por funcionário
server.post("/funcionarios", function(req, res){
    res.send("Eu sou um post")
})
//GET férias por funcionário
server.get("/funcionarios", function(req, res){
    res.send("Eu sou um GET")
})
//GET férias por funcionário/:id
server.get("/funcionarios/:id", function(req,res){
    res.send("Eu sou um GET id")
})
//PUT férias por funcionário/:id
server.patch("/funcionarios/:id", function(req,res){
    req.params.id
    res.send("Eu sou um patch por id")
})
//DELETE férias por funcionário
server.delete("/funcionarios/:id", function(req,res){
    res.send("Eu sou um delete")
})

server.listen(3001)