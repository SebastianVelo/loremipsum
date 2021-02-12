import { Component } from "react";
import { withRouter } from "react-router";

import Header from "./header/Header.jsx";
import Carousel from "../carousel/Carousel.jsx";
import CommentsWrapper from "./commentswrapper/CommentsWrapper.jsx";
import LikeWrapper from "./likewrapper/LikeWrapper.jsx";
import Grid from "../../../util/grid/GridUtil";

class PublicationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publication: this.props.publication
        }
    }
    
    componentDidMount() {
        Grid.setPublicationGrid();
    }

    render() {
        return (
            <div id={this.state.publication.id} className="--publication">
                <Header {...this.state.publication} />
                <Carousel id={this.state.publication.id} pictures={this.state.publication.pictures} />
                <LikeWrapper id={this.state.publication.id} likes={this.state.publication.likes} />
                <CommentsWrapper comments={this.state.publication.comments} userLogged={this.props.userLogged} />
            </div>
        );
    }
}
export default withRouter(PublicationCard);