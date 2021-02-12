const express = require('express');
const cors = require('cors')
const app = express();
const request = require('./request/request');
const port = 5000;

app.use(cors());

app.get("/api/u/:userName", async (req, res) => {
    let user = await request.getUserByUserName(req.params.userName, "GET");
    res.json(user);
})

app.get("/api/f/u/:search", async (req, res) => {
    let user = await request.getUserByUserNameLike(req.params.search, "GET");
    res.json(user);
})

app.get("/api/u/p/:userName", async (req, res) => {
    let publications = await request.getPublicationsByUserName(req.params.userName, "GET");
    res.json(publications);
})

app.get("/api/p/:id", async (req, res) => {
    let publication = await request.getPublicationById(req.params.id, "GET");
    res.json(publication);
})

app.get("/api/home/:userName/:page", async (req, res) => {
    let publications = await request.getHomeByUserName(req.params.userName, req.params.page, "GET");
    res.json(publications);
})

app.get("/api/h/s/:userName", async (req, res) => {
    let stories = await request.getHomeStoriesByUserName(req.params.userName, "GET");
    res.json(stories);
})

app.get("/api/s/:id", async (req, res) => {
    let stories = await request.getStoryById(req.params.id, "GET");
    res.json(stories);
})

app.listen(process.env.PORT || port, () => console.log("Server started on port " + port));
