import React from 'react';
import photoImage from '../../assets/cover/Duane.jpg';


function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">

        {/* Removed the fa-user-circle icon and replaced it with image of my photo. */}
        {/*<i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>*/}
        <img src={photoImage} alt={"Duane Cantera"} style={{ width: "100px",  height: "100px"}}/> 

        </div>
        <p>
        I currently work at Middlesex Community College as a Web Programmer/Developer.  I have developed some new applications for the college using Microsoft Technologies.  I have written a couple applications using ASP.NET Core MVC 2.  These are Model, View and Controller applications similar to Ruby and Rails development.
        </p>
        <p>
        I have also created some new Argos data blocks and set up schedules that can be run to automate email delivery for dropped courses, cancelled courses and midterm grades.
        </p>
        <p>
        I have also been involved in setting up the 25Live Pro application which the college uses for booking events and scheduling classes.  I was involved in setting up the system for the college facilities department so facilities can be added to an event and the facilities department will receive emails and a daily scheduled report about events that require facilities.
        </p>
        <p>
        I decided to take the UNH Boot Camp class because I wanted to brush up my skills and learn some server side technologies.  The college is thinking about redesigning their Student Portal.  If and when a decision is made hopefully I will be able to help in the design and development work for the new Student Portal.
        </p>                   
      </div>
    </section>
  );
}

export default About;
