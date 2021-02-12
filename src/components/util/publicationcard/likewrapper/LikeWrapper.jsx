import { Component } from "react";
import swal from 'sweetalert';

import Buttons from "./Buttons.jsx";

class LikeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes
        }
    }

    changeLikes(add) {
        let likes = this.state.likes;
        if (add) likes++;
        else likes--;
        this.setState({ likes });
    }

    render() {
        return (
            <div className="--publication-like-wrapper">
                <Buttons id={this.props.id} changeLikes={this.changeLikes.bind(this)} />
                <p className="--publication-likes" onClick={() => {swal("Oops!", "Not yet developed", "info")}}> {this.state.likes} likes </p>
            </div>
        );
    }
}
export default LikeWrapper;