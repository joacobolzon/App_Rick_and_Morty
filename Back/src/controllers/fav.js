let fav = [];

const getFavs = (req, res) => {
  res.status(200).json(fav);
};

const postFavs = (req, res) => {
  fav.push(req.body);
  res.status(200).json(req.body);
};

const deleteFavs = (req, res) => {
  const { id } = req.params;
  const character = fav.find((f) => f.id === Number(id));

  if (character) {

    fav = fav.filter(f => f !== character)
    res.status(200).json(character);
  } else {
    res.status(400).json({
      error: "not found this character",
    });
  }
};

module.exports = {
  getFavs,
  postFavs,
  deleteFavs,
};
