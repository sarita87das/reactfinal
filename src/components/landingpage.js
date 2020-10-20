import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from "../myphoto.jpg"

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={avatar}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>ReactJS  |  JavaScript  |  MongoDB  |  MySQL  |  NodeJS  |  RestAPI  |  Express  | </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/dassarita/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/sarita87das" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Portfolio */}
          <a href="https://sarita87das.github.io/bootstrap-portfolio/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
