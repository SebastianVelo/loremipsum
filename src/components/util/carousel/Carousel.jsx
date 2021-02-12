import { Component } from "react";
import { Redirect } from "react-router-dom";
import $ from "jquery";

import Grid from "../../../util/grid/GridUtil";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            interval: 0,
            options: this.props.options ? this.props.options.join(' ') : "",
        }
    }

    getImgs() {
        return Array.prototype.slice.call(document.querySelectorAll(`div#carousel-${this.props.id} > img`));
    }

    getImg(index) {
        return $(`#${this.getImgs()[index].id}`);
    }

    getActive() {
        let indexActive = this.getImgs().findIndex(img => img.className.includes("--carousel-active"));
        return indexActive;
    }

    toggleActive(index) {
        this.getImg(index).toggleClass("--carousel-item");
        this.getImg(index).toggleClass("--carousel-active");
    }

    slide(up) {
        let indexActive = this.getActive();
        let newIndex = 0;
        if (up) {
            if (indexActive < (this.props.pictures.length - 1))
                newIndex = indexActive + 1;
            else if(indexActive === (this.props.pictures.length - 1) && this.props.interval > 0) {
                this.setState({redirect: this.props.redirect});
                return;
            }
        } else {
            if (indexActive > 0)
                newIndex = indexActive - 1;
            else
                newIndex = this.props.pictures.length - 1;
        }
        this.toggleActive(indexActive);
        this.toggleActive(newIndex);
    }

    componentDidMount() {
        if (this.props.pictures.length < 2)
            $(`#carousel-${this.props.id} > button`).css("visibility", "hidden");

        if(this.props.interval > 0)
            this.setState({interval: setInterval(() => this.slide(true), this.props.interval)});

        Grid.setCarouselGrid();
    }

    componentWillUnmount() {
        if(this.state.interval)
            clearInterval(this.state.interval);
    }

    getPictureClass(i) {
        return `${i === 0 ? "--carousel-active " : "--carousel-item "} ${this.state.options}`;
    }

    getButtonClass() {
        return `--carousel-button ${this.state.options} `;
    }

    render() {
        if(this.state.redirect) 
            return <Redirect to={this.state.redirect} />
        return (
            <div className={`--carousel grid ${this.state.options}`} id={`carousel-${this.props.id}`}>
                <button id="left" className={this.getButtonClass()} onClick={() => this.slide(false)}>
                    <i className="--carousel-icon fa fa-arrow-left"></i>
                </button>
                {this.props.pictures.map((picture, i) =>
                    <img key={i} className={this.getPictureClass(i)} id={`${this.props.id}-${i}`} src={picture} alt="" onClick={() => this.slide(true)} onError={(e) => e.target.src = "http://via.placeholder.com/200x200"}/>
                )}
                <button id="right" className={this.getButtonClass()} onClick={() => this.slide(true)}>
                    <i className="--carousel-icon fa fa-arrow-right"></i>
                </button>
            </div>
        );
    }
}
export default Carousel;

