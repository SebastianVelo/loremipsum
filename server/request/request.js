const fetch = require("node-fetch");
const Response = require('../response/response').Response;
const API = require("./const/API");

const users = require("../mock/users").users;
const publications = require("../mock/publications").publications;
const stories = require("../mock/stories").stories;

const request = async (URL, method) => {
    try {
        let dataFetched = await fetch(URL, {
            method: method,
            headers: { "Accept": 'application/json', "Content-type": 'application/json' }
        });
        let response = await dataFetched.json();
        return response;
    } catch (e) {
        return e;
    }
}

const getUserByUserName = async (userName) => {
    //let user = await request(API.PATH_USER(userName), "GET");
    let user = users.find(u => u.userName === userName);
    return new Response(user);
};

const getUserByUserNameLike = async (search) => {
    //let user = await request(API.PATH_USER(userName), "GET");
    let user = users.filter(u => u.userName.toUpperCase().includes(search.toUpperCase()));
    return new Response(user);
};

const getAvatarByUserName = async (userName) => {
    let user = users.find(u => u.userName === userName);
    return user.avatar;
};

const getPublicationsByUserName = async (userName) => {
    let pbs = publications.filter(p => p.user.userName === userName);
    return new Response(pbs);
}

const getPublicationById = async (id) => {
    let publication = publications.find(p => p.id === id);
    if (publication)
        publication.user.avatar = await getAvatarByUserName(publication.user.userName)
    return new Response(publication);
}

const getHomeByUserName = async (userName, page) => {
    let perPage = 5;
    let start = page * perPage;
    let end = start + perPage;
    let pagPublications = publications.slice(start, end);
    pagPublications.forEach(async (p) => { p.user.avatar = await getAvatarByUserName(p.user.userName); });
    return pagPublications;
}

const getHomeStoriesByUserName = async (userName) => {
    stories.forEach(async (s) => { s.user.avatar = await getAvatarByUserName(s.user.userName); });
    return stories;
}

const getStoryById = async (id) => {
    let sts = stories.find(s => s.id === id);
    return new Response(sts);
}

module.exports.getUserByUserName = getUserByUserName;
module.exports.getUserByUserNameLike = getUserByUserNameLike;
module.exports.getPublicationsByUserName = getPublicationsByUserName;
module.exports.getHomeByUserName = getHomeByUserName;
module.exports.getHomeStoriesByUserName = getHomeStoriesByUserName;
module.exports.getStoryById = getStoryById;
module.exports.getPublicationById = getPublicationById;