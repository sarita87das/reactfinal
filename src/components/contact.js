import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from "../dp.jpg"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sarita Das</h2>
            <img
              src={avatar}
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Hello! I am Sarita, full-stack web developer with an inspired mindset,having a great passion for creating web applications. Currently I'm in New Jersey, but willing to relocate for better growth opportunities. I was looking for the opportunity which is equally difficult and evolving . Web creation has always been seen as a technology with a touch of imagination that has no limit.</p>
          </Cell>
          <Cell col={6}>
            <h2>CONTACT ME </h2>
            <hr />
            <div className="contact-list">
              <List>
              <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-github" aria-hidden="true" />
                    https://github.com/sarita87das
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-fax" aria-hidden="true" />
                        https://www.linkedin.com/in/dassarita/
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    https://sarita87das.github.io/Portfolio/
                  </ListItemContent>
                </ListItem>
               
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    nutankarna87@gmail.com
                  </ListItemContent>
                </ListItem>
               
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;
