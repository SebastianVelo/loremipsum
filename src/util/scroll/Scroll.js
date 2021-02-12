import $ from "jquery";

class Scroll {

  static isInTop(bounding) {
    return (bounding.top + (bounding.height * 0.8)) >= 0;
  }

  static isInBottom(bounding) {
    return (bounding.bottom - (bounding.height * 0.8)) <= (document.documentElement.clientHeight);
  }

  static isInViewport(id) {
    var bounding = document.getElementById(id).getBoundingClientRect();
    return this.isInTop(bounding) && this.isInBottom(bounding);
  }

  static setVisibilityEffect(id) {
    if (this.isInViewport(id)) {
      $(`#${id}`).css({ "visibility": "visible", "opacity": 1 });
    } else {
      $(`#${id}`).css({ "visibility": "hidden", "opacity": 0 });
    }
  }

  static setWidthEffect(id) {
    if (this.isInViewport(id)) {
      $(`#${id}`).css("width", "100%");
    } else {
      $(`#${id}`).css("width", "0%");
    }
  }

  static setTransformEffect(id) {
    if (this.isInViewport(id)) {
      $(`#${id}`).css("transform", "rotate(0deg)");
    } else {
      $(`#${id}`).css("transform", "rotate(180deg)");
    }
  }

  static setLeftMoveEffect(id) {
    if (this.isInViewport(id)) {
      $(`#${id}`).css("left", "0");
    } else {
      $(`#${id}`).css("left", "-2000px");
    }
  }


  
  static setScrolls() {
    let publications = $(".--publication").toArray();
    //publications
    publications.forEach(elem => this.setLeftMoveEffect(elem.id));
  }
}
export default Scroll;