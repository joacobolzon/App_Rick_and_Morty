const http = require("http");
const characters = require("../utils/data.js")



http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        let id = req.url.split('/').at(-1);

        let characterFilter = characters.find(char => char.id === Number(id))

        res
        .writeHead(200,{"content-Type":"application/json"})
        .end(JSON.stringify(characterFilter))

    }

}).listen(3001,"localhost");