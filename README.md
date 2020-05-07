# Github-info
Github-info is a module allowing to have information on a user and his repositories.

# Usage

**Import the package**
```js
const github = require('github-info-dev');
```
Now, we get can get information about user or repositories.
```js
github.fetchUser('Shadowv7').then((user) => {
  console.log(user)
  /*
  UserInfo {
  name: 'Shadowv7',
  id: 60565794,
  createdAt: '2020-02-02T07:52:28Z',
  updatedAt: '2020-05-06T10:39:14Z',
  bio: 'A trash javascript developper',
  link: 'https://github.com/Shadowv7',
  repoLength: 27,
  avatarURL: 'https://avatars0.githubusercontent.com/u/60565794?v=4',
  followers: 2,
  following: 1
}
  */
})
```




