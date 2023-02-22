const axios = require('axios')
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharDetail = async (req, res) => {
    try {
        const {detailId} = req.params
        let result = await axios(URL + detailId);
        let { data } = result;
        let character = {
            name : data.name,
            image: data.image,
            id: data.id,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin
        }
        res.status(200);
        res.json(character)
    } catch (err) {
        res.status(500)
        res.json({ message: err.message})
    }
}

module.exports = getCharDetail;