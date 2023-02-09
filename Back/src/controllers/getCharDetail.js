const axios = require('axios')

const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(result => result.data)
        .then(data => {
            let char = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                status: data.status,
                origin: data.origin?.name,
                species: data.species
            }
            res
                .writeHead(200, { 'Content-Type': 'application/json' })
                .end(JSON.stringify(char))
        })
        .catch(err =>
            res
                .writeHead(500, { 'Content-type': 'text/plain' })
                .end(`Personaje con ID:${id} no fue encontrado`)
        )
}

module.exports = {getCharDetail};