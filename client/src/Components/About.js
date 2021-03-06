import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'

export default class About extends Component {
  render() {
    return (
      <Segment>
        <div className='about-container' >
            <img className='hero-img' src='./assets/intern.jpg' alt='heroImg' />
            <div className='centered'>
            <h1 className='about-title' >Bettership - A Better Internship Experience </h1>
            <p>Internships are a great opportunity for high school students to learn and develop professional skills.  The problem is, they can be really hard to find and track the progress of.  Here at Bettership our goal is to streamline the process for students, schools, and the companies hiring your students.  </p>
            </div>
        </div>
            
        <Message >
          <h2 >Sponsor Companies</h2>
          <div id='sponsor-logo-container' >
            <img className='logo1' src='./assets/DAM.png' alt='Art Museum' />
            <img className='logo' src='./assets/BP.png' alt='BP' />
            <img className='logo3' src='./assets/chrome.png' alt='FB' />
            <img className='logo4' src='./assets/childrensHos.png' alt='Childrens Hospital' />
            <img className='logo5' src='./assets/red-cross.png' alt='Red Cross' />
          </div>
        </Message>
      </Segment>
    );
  }
}