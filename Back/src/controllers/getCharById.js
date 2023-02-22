const axios = require("axios");
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
  try {
    const {id} = req.params;
    let result = await axios(URL + id)
    const { data } = result;
            let character = {
                name : data.name,
                image: data.image,
                id: data.id,
                gender: data.gender,
                species: data.species
            }
            res.status(200)
            res.json(character)
        
    } catch (err) {
        res.status(500)
        res.json({message: err.message})
    }
};

module.exports = getCharById