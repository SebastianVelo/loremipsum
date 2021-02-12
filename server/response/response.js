class Response {
    constructor(data) {
        this.data = data;
        this.ok = data !== undefined;
    }
}

module.exports.Response = Response;