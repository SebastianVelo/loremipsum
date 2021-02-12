import { Link } from "react-router-dom";
import Path from "../../../../enums/Path";

function StoryBall(props) {
    return (
        <div className="--story-ball" key={props.story.id}>
            <Link to={{ pathname: Path.STORY(props.story.id) }}>
                <img className="--story-avatar" src={props.story.user.avatar} alt="" />
            </Link>
            <p className="--story-user">
                {props.story.user.userName}
            </p>
        </div>
    );
}
export default StoryBall;