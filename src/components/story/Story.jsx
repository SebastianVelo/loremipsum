import { Component } from "react";
import { Redirect, withRouter } from "react-router";

import Grid from "../../util/grid/GridUtil";

import Carousel from "../util/carousel/Carousel.jsx";

import API from "../../enums/API";
import Path from "../../enums/Path";
import { Link } from "react-router-dom";
import Message from "../util/message/Message";

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: {},
            inProcess: true
        }
    }

    async getStoryById() {
        await fetch(API.PATH_STORY(this.props.match.params.id))
            .then(res => res.json())
            .then(story => this.setState({ story: story.data, inProcess: false }));
    }

    async componentDidMount() {
        await this.getStoryById();
        Grid.setStoryGrid();
    }

    render() {
        if (this.state.inProcess)
            return <Message title="Cargando..." body="" />
        if (!this.state.inProcess && !this.state.story)
            return <Redirect to={Path.NOTFOUND()} />
        return (
            !this.state.inProcess &&
            <div className="--story grid">
                <div className="--story-header">
                    <img className="--story-avatar" src={this.state.story.user.avatar} alt="" />
                    <Link to={{ pathname: Path.PROFILE(this.state.story.user.userName) }} className="--story-user">{this.state.story.user.userName}</Link>
                </div>
                <div className="--story-picture-wrapper">
                    <Carousel id={this.state.story.id} pictures={this.state.story.pictures} interval={2000} redirect={Path.HOME()[1]}  options={["fullH"]} />
                </div>
            </div>
        );
    }
}
export default withRouter(Story);