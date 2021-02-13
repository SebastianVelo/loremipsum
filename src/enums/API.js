class API {
    static URL = "https://loremipsum-api.herokuapp.com/api";
    static PATH_USER = (userName) => `${this.URL}/u/${userName}`;
    static PATH_USER_SEARCH = (search) => `${this.URL}/f/u/${search}`;
    static PATH_PUBLICATIONS = (userName) => `${this.URL}/u/p/${userName}`;
    static PATH_PUBLICATION = (id) => `${this.URL}/p/${id}`;
    static PATH_HOME = (userName, page) => `${this.URL}/home/${userName}/${page}`;
    static PATH_HOME_STORIES = (userName) => `${this.URL}/h/s/${userName}`;
    static PATH_STORY = (id) => `${this.URL}/s/${id}`;
    
}
export default API;