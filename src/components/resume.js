import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import avatar from "../dp.jpg"

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={avatar}
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Sarita Das</h2>
            <h4 style={{ color: 'grey' }}>FULL STACK WEB DEVELOPER</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            <p>Hey! Hi! My academic credentials include my high school, my technical diploma and college, where I studied business and media studies, such as commerce and mass communication. I am Sarita, with a motivated mind, a full-stack web developer. Including my web creation boot camp, I have three degrees in higher education where I have developed my teamwork and problem-solving skills.</p>


            <h5>Address</h5>
            <p>PISCATAWAY , NEW JERSEY , 08854</p>
            <h5>Phone</h5>
            <p>908-938-5056</p>
            <h5>Email</h5>
            <p>NUTANKARNA87@GMAIL.COM</p>

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Rutgers University"
              schoolDescription="Certificate in Full Stack Development"
            />
            <Education
              startYear={2009}
              endYear={2011}
              schoolName="Makhanlal Chaturvedi University"
              schoolDescription="MA in Mass Communication"
            />
            <Education
              startYear={2008}
              endYear={2009}
              schoolName="Patna University"
              schoolDescription="PG Diploma in Computer Application"
            />
            <Education
              startYear={2005}
              endYear={2007}
              schoolName="Awadhesh Pratap Singh University"
              schoolDescription="Bachelor of Commerce"
            />

            <h2>Skills</h2>
            <Skills
              skill="ReactJS"
              progress={100}
            />
            <Skills
              skill="Javascript"
              progress={80}
            />
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="NodeJS"
              progress={100}
            />
            <Skills
              skill="APIs"
              progress={100}
            />
            <Skills
              skill="ExpressJS"
              progress={100}
            />
            <Skills
              skill="NoSQL/MongoDB"
              progress={100}
            />
            <Skills
              skill="SQL/MySQL"
              progress={100}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
