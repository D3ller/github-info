# Github-info
Github-info is a module allowing to have information on a user and his repositories.

# Usage

**Import the package**
```js
const GI = require('github-info-dev');
const GithubName = new GI("your-name");
```
Now, we get can get information about user or repositories.
```js
// Get the name
console.log(GithubName.name) //output : "your-name"

//Get the identifiant
GithubName.id().then(id =>{
  console.log(`ID: ${g}`); //output : "ID: 38815571"
});

//Get the avatar_url
GithubName.avatarURL().then(URL =>{
    console.log("AvatarURL "+ URL); //output : "AvatarURL : https://avatars1.githubusercontent.com/u/38815571?v=4"
})
```




