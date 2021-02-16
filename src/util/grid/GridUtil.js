import $ from "jquery";

import GridSystem from "./GridSystem";

const GridSize = {
    ALL: "all",
    SMALL: "s",
    MEDIUM: "m",
    LARGE: "l",
    EXTRALARGE: "xl"
}


//------------------------------------------------------------------------------

//USERPROFILE

//------------------------------------------------------------------------------

//PUBLICATIONS


//------------------------------------------------------------------------------

//MODAL
const modal = new GridSystem();
const modalContent = new GridSystem();
modalContent.add(GridSize.SMALL, 12);
modalContent.add(GridSize.MEDIUM, 6, 3);
modalContent.add(GridSize.LARGE, 6, 3);
modalContent.add(GridSize.EXTRALARGE, 4, 4);
modal.addChild("CONTENT", modalContent);

//------------------------------------------------------------------------------

function setNavGrid() {
    const nav = new GridSystem();
    nav.add(GridSize.ALL, 12);
    const brand = new GridSystem();
    brand.add(GridSize.ALL, 1);
    brand.addOnlyOffset(GridSize.SMALL, 1);
    brand.addOnlyOffset(GridSize.MEDIUM, 2);
    brand.addOnlyOffset(GridSize.LARGE, 3);
    brand.addOnlyOffset(GridSize.EXTRALARGE, 4);
    const searchBar = new GridSystem();
    searchBar.addHidden(GridSize.SMALL);
    searchBar.addHidden(GridSize.MEDIUM);
    searchBar.add(GridSize.LARGE, 3, 6);
    searchBar.add(GridSize.EXTRALARGE, 2, 6);

    $('.--nav').addClass(nav.getClass());
    $('.--nav-brand').addClass(brand.getClass());
    $('.--nav-searchbar-wrapper').addClass(searchBar.getClass());

}

function setHomeGrid() {
    const home = new GridSystem();
    home.add(GridSize.SMALL, 12);
    home.add(GridSize.MEDIUM, 8, 2);
    home.add(GridSize.LARGE, 6, 3);
    home.add(GridSize.EXTRALARGE, 4, 4);

    $('.--home').addClass(home.getClass());
}

function setCarouselGrid() {
    const carouselButton = new GridSystem();
    carouselButton.add(GridSize.ALL, 1);
    const carouselPicture = new GridSystem();
    carouselPicture.add(GridSize.ALL, 10);

    $('.--carousel-item').addClass(carouselPicture.getClass());
    $('.--carousel-active').addClass(carouselPicture.getClass());
    $('.--carousel-button').addClass(carouselButton.getClass());

}

function setStoryGrid() {
    const story = new GridSystem();
    story.add(GridSize.ALL, 12);
    const storyHeader = new GridSystem();
    storyHeader.add(GridSize.SMALL, 12);
    storyHeader.add(GridSize.MEDIUM, 6, 3);
    storyHeader.add(GridSize.LARGE, 4, 4);
    storyHeader.add(GridSize.EXTRALARGE, 4, 4);
    const storyPictures = new GridSystem();
    storyPictures.add(GridSize.SMALL, 12);
    storyPictures.add(GridSize.MEDIUM, 6, 3);
    storyPictures.add(GridSize.LARGE, 4, 4);
    storyPictures.add(GridSize.EXTRALARGE, 4, 4);

    $('.--story').addClass(story.getClass());
    $('.--story-header').addClass(storyHeader.getClass());
    $('.--story-picture-wrapper').addClass(storyPictures.getClass());
}

function setPublicationWrapperGrid() {
    const publicationWrapper = new GridSystem();
    publicationWrapper.add(GridSize.SMALL, 12);
    publicationWrapper.add(GridSize.MEDIUM, 8, 2);
    publicationWrapper.add(GridSize.LARGE, 6, 3);
    publicationWrapper.add(GridSize.EXTRALARGE, 4, 4);
    $('.--publication-wrapper').addClass(publicationWrapper.getClass());
}

function setPublicationGrid() {
    const headerAvatar = new GridSystem();
    headerAvatar.add(GridSize.SMALL, 2);
    headerAvatar.add(GridSize.MEDIUM, 2);
    headerAvatar.add(GridSize.LARGE, 1);
    headerAvatar.add(GridSize.EXTRALARGE, 1);
    const headerUser = new GridSystem();
    headerUser.add(GridSize.SMALL, 9);
    headerUser.add(GridSize.MEDIUM, 9);
    headerUser.add(GridSize.LARGE, 10);
    headerUser.add(GridSize.EXTRALARGE, 10);
    const headerOptions = new GridSystem();
    headerOptions.add(GridSize.ALL, 1);
    $('.--publication-avatar-wrapper').addClass(headerAvatar.getClass());
    $('.--publication-user-wrapper').addClass(headerUser.getClass());
    $('.--publication-options-wrapper').addClass(headerOptions.getClass());

    const buttonLike = new GridSystem();
    buttonLike.add(GridSize.ALL, 1);
    const buttonSave = new GridSystem();
    buttonSave.add(GridSize.ALL, 1, 11);
    $('.--like-wrapper').addClass(buttonLike.getClass());
    $('.--save-wrapper').addClass(buttonSave.getClass());

    const commentBox = new GridSystem();
    commentBox.add(GridSize.ALL, 11);
    const commentIcon = new GridSystem();
    commentIcon.add(GridSize.ALL, 1);
    $('.--comment-box').addClass(commentBox.getClass());
    $('.--comment-box-button').addClass(commentIcon.getClass());

}

function setUserProfileGrid() {
    const userProfile = new GridSystem();
    userProfile.add(GridSize.SMALL, 12);
    userProfile.add(GridSize.MEDIUM, 8, 2);
    userProfile.add(GridSize.LARGE, 5, 3);
    userProfile.add(GridSize.EXTRALARGE, 4, 4);
    
    const avatar = new GridSystem();
    avatar.add(GridSize.ALL, 4);

    const desc = new GridSystem();
    desc.add(GridSize.ALL, 7, 5);
    const user = new GridSystem();
    user.add(GridSize.ALL, 12);
    const info = new GridSystem();
    info.add(GridSize.ALL, 4);
    
    const picture = new GridSystem();
    picture.add(GridSize.ALL, 4);

    $('.--user-profile').addClass(userProfile.getClass());
    $('.--user-profile-avatar').addClass(avatar.getClass());
    $('.--user-profile-desc').addClass(desc.getClass());
    $('.--user-profile-user').addClass(user.getClass());
    $('.--user-profile-info').addClass(info.getClass());
    $('.--user-profile-picture-link').addClass(picture.getClass());

}

function setNotFoundGrid() {
    const notFound = new GridSystem();
    notFound.add(GridSize.SMALL, 12);
    notFound.add(GridSize.MEDIUM, 8, 2);
    notFound.add(GridSize.LARGE, 5, 3);
    notFound.add(GridSize.EXTRALARGE, 4, 4);
    $('.--not-found').addClass(notFound.getClass());
}

const Grid = {
    MODAL: modal,
    setNavGrid: () => setNavGrid(),
    setHomeGrid: () => setHomeGrid(),
    setStoryGrid: () => setStoryGrid(),
    setCarouselGrid: () => setCarouselGrid(),
    setPublicationGrid: () => setPublicationGrid(),
    setPublicationWrapperGrid: () => setPublicationWrapperGrid(),
    setUserProfileGrid: () => setUserProfileGrid(),
    setNotFoundGrid: () => setNotFoundGrid()
}
export default Grid;