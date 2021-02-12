import { Link } from "react-router-dom";
import swal from 'sweetalert';

import Path from "../../../../enums/Path";

function Header(props) {
    return (
        <div className="--publication-header grid">
            <div className="--publication-avatar-wrapper">
                <img className="--publication-avatar" src={props.user.avatar} alt="" />
            </div>
            <div className="--publication-user-wrapper">
                <Link to={{ pathname: Path.PROFILE(props.user.userName) }} className="--publication-user">{props.user.userName}</Link>
            </div>
            <div className="--publication-options-wrapper">
                <p className="--publication-options" onClick={() => {swal("Oops!", "Not yet developed", "info")}}>...</p>
            </div>
        </div>
    )
}
export default Header;