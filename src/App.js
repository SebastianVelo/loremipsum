import { Component } from 'react';
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import './App.scss';

import Path from './enums/Path';
import Grid from './util/grid/GridUtil';

import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Story from './components/story/Story.jsx';
import UserProfile from './components/userprofile/UserProfile.jsx';
import Publication from './components/publication/Publication';
import NotFound from "./components/notfound/NotFound.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: {
        id: "US-60229b157b531b0b629b0c43",
        avatar: "https://picsum.photos/id/79/200",
        userName: "ZIGGLES40",
        followers: 252,
        following: 93
      }
    }
  }

  componentDidMount() {
    Grid.setNavGrid();
  }

  render() {
    return (
      <div className="grid">
        <Navbar />
        <Route exact path={Path.HOME()} component={() => <Home userLogged={this.state.userLogged} />} />
        <Route exact path={Path.PROFILE(":id")} component={() => <UserProfile />} />
        <Route exact path={Path.STORY(":id")} component={() => <Story userLogged={this.state.userLogged} />} />
        <Route exact path={Path.PUBLICATION(":id")} component={() => <Publication userLogged={this.state.userLogged} />} />
        <Route exact path={Path.NOTFOUND()} component={() => <NotFound />} />
      </div>
    );
  }
}

export default withRouter(App);
