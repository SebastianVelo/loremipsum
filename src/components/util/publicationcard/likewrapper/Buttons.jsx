import { Component } from "react";
import $ from "jquery";

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeActive: false,
            saveActive: false
        }
    }

    likeAction(icon) {
        $(`#${icon.id}`).toggleClass("fa fa-heart-o");
        $(`#${icon.id}`).toggleClass("fa fa-heart");
        $(`#${icon.id}`).toggleClass("active");
        this.props.changeLikes(!this.state.likeActive);
        this.setState({likeActive: !this.state.likeActive});
    }

    saveAction(icon) {
        $(`#${icon.id}`).toggleClass("active");
    }

    render() {
        return (
            <div className="grid">
                <div className="--like-wrapper">
                    <i id={"like-" + this.props.id} className="--publication-icon fa fa-heart-o like" onClick={(e) => this.likeAction(e.target)}></i>
                </div>
                <div className="--save-wrapper">
                    <i id={"save-" + this.props.id} className="--publication-icon fa fa-save save" onClick={(e) => this.saveAction(e.target)}></i>
                </div>
            </div>
        );
    }
}
export default Buttons;