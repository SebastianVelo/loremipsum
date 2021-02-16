import { Component } from "react";
import { Redirect, withRouter } from "react-router";

import API from "../../enums/API.js";
import Path from "../../enums/Path.js";
import Message from "../util/message/Message.jsx";
import PublicationCard from "../util/publicationcard/PublicationCard.jsx";

class Publication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publication: this.props.publication,
            inProcess: true
        }
    }

    async getPublication() {
        await fetch(API.PATH_PUBLICATION(this.props.match.params.id))
            .then(res => res.json())
            .then(publication => this.setState({ publication: publication.data, inProcess: false }));
    }

    async componentDidMount() {
        if (this.props.match.params.id)
            await this.getPublication();
        Grid.setNotFoundGrid();
    }

    render() {
        if (this.state.inProcess)
            return (<div className="--not-found">
                <Message title="Cargando..." body="" />
            </div>)
        if (!this.state.inProcess && !this.state.publication)
            return <Redirect to={Path.NOTFOUND()} />
        return (
            (!this.props.match.params.id || (this.props.match.params.id && !this.state.inProcess)) &&
            <div className="--publication-wrapper">
                <PublicationCard publication={this.state.publication} userLogged={this.props.userLogged} />
            </div>
        );
    }
}
export default withRouter(Publication);