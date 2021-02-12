import { Component } from "react";
import { Redirect, withRouter } from "react-router";
import Grid from "../../util/grid/GridUtil";

import API from "../../enums/API";
import { Link } from "react-router-dom";
import Path from "../../enums/Path";
import Message from "../util/message/Message.jsx";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inProcess: true
        }
    }

    async getUser() {
        await fetch(API.PATH_USER(this.props.match.params.id))
            .then(res => res.json())
            .then(user => this.setState({ user: user.data }))
    }

    async getPublications() {
        await fetch(API.PATH_PUBLICATIONS(this.props.match.params.id))
            .then(res => res.json())
            .then(publications => this.setState({ publications: publications.data, inProcess: false }));
    }

    async componentDidMount() {
        await this.getUser();
        await this.getPublications();
        Grid.setUserProfileGrid();
    }

    render() {
        if(!this.state.inProcess && !this.state.user)
            return <Redirect to={Path.NOTFOUND()} />
        return (
            !this.state.inProcess &&
            <div className="--user-profile">
                <div className="--user-profile-data grid">
                    <img className="--user-profile-avatar" src={this.state.user.avatar} />
                    <div className="--user-profile-desc grid">
                        <p className="--user-profile-user">{this.state.user.userName}</p>
                        <p className="--user-profile-info"><b>{this.state.publications.length}</b> <br /> posts</p>
                        <p className="--user-profile-info"><b>{this.state.user.followers}</b> <br /> followers</p>
                        <p className="--user-profile-info"><b>{this.state.user.following}</b> <br /> following</p>
                    </div>
                </div>
                <div className="--user-profile-pictures-wrapper grid">
                    {this.state.publications.map((p, i) =>
                        <Link key={i} to={{ pathname: Path.PUBLICATION(p.id) }} className="--user-profile-picture-link">
                            <img className="--user-profile-picture" alt="" src={p.pictures[0]} onError={(e) => e.target.src = "http://via.placeholder.com/200x200"}>
                            </img>
                        </Link>
                    )}
                </div>
                {this.state.publications.length === 0 ? <Message title="Oops..." body="No posts yet." /> : ""}
            </div>
        );
    }
}
export default withRouter(UserProfile);