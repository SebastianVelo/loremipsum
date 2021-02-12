import { Link } from "react-router-dom";
import Path from "../../../../enums/Path";

function Comment(props) {
    return (
        <p className="--publication-comment-wrapper">
             <Link to={{ pathname: Path.PROFILE(props.userName) }} className="--publication-comment-user">{props.userName}&nbsp;</Link>
             {props.comment}
        </p>
    )
}
export default Comment;