import { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../../enums/API";
import Path from "../../../enums/Path";
import PopOver from "../../util/popover/PopOver";

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    async handleChange(value) {
        if (value === "") {
            this.setState({ results: [] });
            return;
        }
        await this.getResults(value);
    }

    async getResults(search) {
        await fetch(API.PATH_USER_SEARCH(search))
            .then(res => res.json())
            .then(results => this.setState({ results: results.data }))
    }

    render() {
        return (
            <div className="--nav-searchbar-wrapper">
                <PopOver
                    trigger={
                        <input className="--nav-searchbar" id="search-bar" placeholder="Search users" autoComplete="off" onChange={(e) => this.handleChange(e.target.value)} />
                    }
                    content={
                        <ul className="--nav-searchbar-results">
                            
                            {this.state.results.map(r =>
                                <li className="grid">
                                    <img className="--nav-searchbar-result-avatar col-all-2" src={r.avatar} alt="" />
                                    <Link to={{ pathname: Path.PROFILE(r.userName) }} className="--nav-searchbar-result-user col-all-10">
                                        {r.userName}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    }
                />
            </div>
        );
    }
}
export default Searchbar;
