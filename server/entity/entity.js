class User {
    constructor(resp){
        this.id = resp.id;
        this.userName = resp.userName;
        this.avatar = resp.avatar;
        this.followers = resp.followers;
        this.following = resp.following;
    }
}

module.exports.User = User;