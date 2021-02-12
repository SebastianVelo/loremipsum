import { Component } from "react";
import Grid from "../../util/grid/GridUtil";
import Message from "../util/message/Message";

class NotFound extends Component {

    componentDidMount() {
        Grid.setNotFoundGrid();
    }

    render() {
        return (
            <div className="--not-found">
                <Message
                    title="Sorry, this page isn't available. :("
                    body="The link you followed may be broken, or the page may have been removed."
                />
            </div>
        );
    }
}
export default NotFound;