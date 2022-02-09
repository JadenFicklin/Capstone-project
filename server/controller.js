const houses = require("./db.json");

const chats = [];

module.exports = {
  getHouses: (req, res) => res.status(200).send(houses),
  getHousesId: (req, res) => {
    const id = req.params.id * 1;
    const selectedHouse = houses.find((house) => house.id === id);
    res.status(200).send(selectedHouse);
  },
  // usernamepassword: (req, res) => {
  //   console.log(req.body);
  //   const { username, password } = req.body;

  //   for (let i = 0; i < chats.length; i++) {
  //     if (chats[i].password === password && chats[i].username === username) {
  //       alert('you are logged in')
  //       res.status(200).send(chats[i])
  //       return;
  //     }
  //   }
  // },
};
