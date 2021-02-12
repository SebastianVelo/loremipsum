import { Component } from "react";
import $ from "jquery";

import StoryBall from "./storyball/StoryBall";

class StoryBalls extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    slide(right) {
        let scroll =  $("#storiesBalls").scrollLeft();
        let move =  ($("#storiesBalls").width() - 40) * (right ? 1 : -1);
        $("#storiesBalls").scrollLeft(scroll + move);
    }

    render() {
        return (
            <div className="--story-balls-container grid">
                <button className="--story-balls-button col-all-1" onClick={() => this.slide(false)}>
                    <i className="fa fa-arrow-left"></i>
                </button>
                <div className="--story-balls-wrapper col-all-10" id="storiesBalls">
                    {this.props.stories.map(story => <StoryBall key={story.id} story={story} />)}
                </div>
                <button className="--story-balls-button --button-foward col-all-1" onClick={() => this.slide(true)}>
                    <i className="fa fa-arrow-right"></i>
                </button>
            </div>
        )
    }
}
export default StoryBalls;