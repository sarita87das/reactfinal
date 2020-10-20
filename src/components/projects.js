import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >My Camp</CardTitle>
            <CardText>
              MyCamp is an online rental application where vacationers may search and book vacation rentals, homes, and hotels. The application also has a feature where hosts may opt to host their own homes as a vacation spot.
            </CardText>
            <CardActions border>
              <Button colored ><a href="https://github.com/sarita87das/MyCamp">GITHUB</a>
              </Button>
              <Button colored><a href="https://mycamp2020.herokuapp.com/">heroku</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton  />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Employee Directory</CardTitle>
            <CardText>
              An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.Check this app for the same.

            </CardText>
            <CardActions border>
              <Button colored ><a href="https://github.com/sarita87das/Employee_Directory">GITHUB</a>
              </Button>
              <Button colored ><a href="https://sarita87das.github.io/Employee_Directory/">DEPLOYED</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton  />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Portfolio</CardTitle>
            <CardText>
              Mastering the React with this final app which is my portfolio. Using react hooks, state, contextAPI, and redux, created this app.Its fully responsive and user friendly. Please check this out..
            </CardText>
            <CardActions border>
              <Button colored ><a href="https://github.com/sarita87das/portfolioreact/tree/master/src">GITHUB</a>
              </Button>
              <Button colored><a href="https://github.com/sarita87das/portfolioreact/tree/master/src">DEPLOYED</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton  />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '850', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Employee Management System</CardTitle>
            <CardText>
              Architect and develop a solution using node, inquirer, and MySQL to handle employees of a business.
            </CardText>
            <CardActions border>
              <Button colored ><a href="https://github.com/sarita87das/Employee_Management_System">GITHUB</a>
              </Button>
              <Button colored><a href="https://sarita87das.github.io/Employee_Management_System/">heroku</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton  />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '850', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Node Express Handlebars</CardTitle>
            <CardText>
              An app that uses express node handlebars with mvc paradigm and orm backed by mysql database.

            </CardText>
            <CardActions border>
              <Button colored ><a href="https://github.com/sarita87das/Burger">GITHUB</a>
              </Button>
              <Button colored ><a href="https://burger-logger-sarita.herokuapp.com/">HEROKU</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton  />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: '850', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >WEATHER DASHBOARD</CardTitle>
              <CardText>
                With the use of javascript and web api, an app that displays the latest weather along with five day forecasts.
            </CardText>
              <CardActions border>
                <Button colored ><a href="https://github.com/sarita87das/hw6">GITHUB</a>
                </Button>
                <Button colored><a href="https://sarita87das.github.io/Weather-Dashboard/">DEPLOYED</a></Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton  />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: '850', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >WORKDAY SCHEDULER</CardTitle>
              <CardText>
                A simple application for a calendar that allows the user to save events for each hour of the day. This software runs in the browser and features dynamically modified jQuery-powered HTML and CSS.

            </CardText>
              <CardActions border>
                <Button colored ><a href="https://github.com/sarita87das/hw5">GITHUB</a>
                </Button>
                <Button colored ><a href="https://sarita87das.github.io/Workday-scheduler/">DEPLOYED</a></Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton  />
              </CardMenu>
            </Card>
          </div></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '850', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >FITNESS TRACKER</CardTitle>
            <CardText>
              With the use of javascript and web api, an app that displays the latest weather along with five day forecasts.
          </CardText>
            <CardActions border>
              <Button colored ><a href="https://github.com/sarita87das/NoSql-Workout-Tracker">GITHUB</a>
              </Button>
              <Button colored><a href="https://nosql-fitnesstracker.herokuapp.com/">HEROKU</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton  />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '850', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >PROGRESSIVE BUDGET</CardTitle>
            <CardText>
              A simple application for a calendar that allows the user to save events for each hour of the day. This software runs in the browser and features dynamically modified jQuery-powered HTML and CSS.

          </CardText>
            <CardActions border>
              <Button colored ><a href="https://github.com/sarita87das/online-ofline-budget-tracker">GITHUB</a>
              </Button>
              <Button colored ><a href="https://progressivebudgethw18.herokuapp.com/">HEROKU</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton  />
            </CardMenu>
          </Card>
        </div></div>
      )
    }
  }
  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>MySql</Tab>
          <Tab>Javascript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
