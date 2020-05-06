const monmodule = require('./files/github');
const GithubName = new monmodule("test");

GithubName.id().then(g=>{
  console.log("son nom est "+ g);
});

GithubName.avatarURL().then(g=>{
    console.log("Son avatar est "+ g);
})
