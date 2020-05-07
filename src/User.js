module.exports = class UserInfo {
  constructor(url) {
    this.url = url
    this.name = url.login;
    this.id = url.id;
    this.careatedAt = url.created_at
    this.updatedAt = url.updated_at
    this.bio = url.bio
    this.link = url.html_url
    this.repoLength = url.public_repo
    this.avatarURL = url.avatar_url;
    this.followers = url.followers;
    this.following = url.following;
  }
};
