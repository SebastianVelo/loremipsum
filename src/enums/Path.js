const Path = {
    HOME: () => ["/", "/home"],
    PROFILE: (id) => "/u/" + id,
    STORY: (id) => "/s/" + id,
    PUBLICATION: (id) => "/p/" + id,
    NOTFOUND: () => "/404",
}
export default Path;