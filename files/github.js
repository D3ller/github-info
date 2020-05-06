const getJSON = require("simple-get-json")

module.exports = class monmodule {
  constructor(name) {
    this.name = name;
  }

  async id() {
    try {
      this.name = (await getJSON(`https://api.github.com/users/${this.name}`)).id;
      return this.name;

    } catch (err) {
      return;
    }

  }

  //avatarURL
  async avatarURL() {
    try {
      this.avatar = (await getJSON(`https://api.github.com/users/${this.name}`)).avatar_url;
      return this.avatar;
    } catch (err) {
      return;
    }
  }

  async CreatedAt() {
    try {
      this.createdat = (await getJSON(`https://api.github.com/users/${this.name}`)).created_at;
      return this.createdat;
    } catch (err) {
      return;
    }
  }

};
