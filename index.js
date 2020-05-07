const getJSON = require("simple-get-json");
const userInfo = require("./src/User");

module.exports = {
  fetchUser: name => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          new userInfo(await getJSON(
        `https://api.github.com/users/${name}`
      ))
        );
      } catch (err) {
        return reject(`Error : ${err}`);
      }
    });
  }
};
