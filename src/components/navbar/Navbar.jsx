import { Link } from "react-router-dom";
import Path from "../../enums/Path";
import Searchbar from "./searchbar/Searchbar";

function Navbar() {
    return (
        <nav className="--nav grid">
            <div className="--nav-brand">
                <p id="brand"><Link to={{ pathname: Path.HOME()[1] }}>LoremIpsum</Link></p>
            </div>
            <Searchbar />
        </nav>
    );
}
export default Navbar;
