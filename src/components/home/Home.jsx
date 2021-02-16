import { Component } from 'react';
import $ from "jquery";

import API from '../../enums/API';
import Grid from '../../util/grid/GridUtil';

import StoryBalls from '../util/storyballs/StoryBalls';
import PublicationCard from '../util/publicationcard/PublicationCard.jsx';
import Message from "../util/message/Message";
import Scroll from '../../util/scroll/Scroll';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
      stories: [],
      page: 0,
      inProcess: true
    };
  }

  async pagination() {
    window.onscroll = async () => {
      if ($(window).scrollTop() + 10 > $(document).height() - $(window).height()) {
        this.setState({ page: this.state.page + 1 });
        await this.getPublications(this.state.page);
      }
      Scroll.setScrolls();
    };
  }

  async getPublications(page) {
    await fetch(API.PATH_HOME(this.props.userLogged.userName, page))
      .then(res => res.json())
      .then(pubs => {
        let publications = this.state.publications;
        publications.push(...pubs);
        return this.setState({ publications })
      });
  }

  async getStories() {
    await fetch(API.PATH_HOME_STORIES(this.props.userLogged.userName))
      .then(res => res.json())
      .then(stories => this.setState({ stories }));
  }

  async componentDidMount() {
    Grid.setHomeGrid();
    await this.getPublications(this.state.page);
    await this.getStories();
    this.setState({inProcess: false});
    await this.pagination();
  }

  render() {
    if (this.state.inProcess)
        return <Message title="Cargando..." body="" />
    return (
      <div className="--home">
        <StoryBalls stories={this.state.stories} />
        <div className="--publications-wrapper">
          {this.state.publications.map(publication => <PublicationCard key={publication.id} publication={publication} userLogged={this.props.userLogged} />)}
        </div>
        {this.state.publications.length === 0 ? <Message title="Oops..." body="No posts yet." /> : ""}
      </div>
    );
  }
}

export default Home;
