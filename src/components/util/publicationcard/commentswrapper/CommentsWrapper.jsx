import { Component } from "react";
import swal from 'sweetalert';

import Comment from "./Comment.jsx";

class CommentsWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {},
            comments: this.props.comments
        }
    }

    addComment(msg) {
        let comments = this.state.comments;
        comments.push({ userName: this.props.userLogged.userName, comment: msg });
        this.setState({ comments });
    }

    handleInput(input) {
        this.setState({ input });
    }

    handleClick() {
        if(!this.state.input.value) {
            swal("You can't send an empty comment!", "", "warning");
            return;
        }
        this.addComment(this.state.input.value);
        this.state.input.value = "";
    }

    render() {
        return (
            <div className="--publication-comments-wrapper">
                <div className="--publication-comments-list">
                    {this.state.comments.map((comment, i) => <Comment key={i} {...comment} />)}
                </div>
                <div className="--comment-box-wrapper grid">
                    <input className="--comment-box" placeholder="Add a comment..." onChange={(e) => this.handleInput(e.target)} />
                    <i className="--comment-box-button --publication-icon fa fa-send-o" onClick={() => this.handleClick()}></i>
                </div>
            </div>
        );
    }
}
export default CommentsWrapper;