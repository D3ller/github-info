const monmodule = require('./files/test');
const GithubName = new monmodule("salut");

console.log(GithubName.id)
console.log(GithubName.avatarURL)
