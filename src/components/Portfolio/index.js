import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Weather-Dashboard',
      description: 'Server-Side APIs',
      link: "https://canterad.github.io/Weather_Dashboard/",
      repo: "https://github.com/canterad/Weather_Dashboard.git"
    },
    {
      name: 'Note-Taker',
      description: 'Express',
      link: "https://limitless-sea-65100.herokuapp.com/",
      repo: "https://github.com/canterad/Note_Taker.git"
    },
    {
      name: 'Coding-Quiz',
      description: 'Web APIs',
      link: "https://canterad.github.io/Coding_Quiz/",
      repo: "https://github.com/canterad/Coding_Quiz.git"
    },
    {
      name: 'Tech-Blog',
      description: 'Model-View-Controller (MVC)',
      link: "https://still-hamlet-61193.herokuapp.com/",
      repo: "https://github.com/canterad/Tech_Blog.git"
    },
    {
      name: 'Password-Generator',
      description: 'JavaScript',
      link: "https://canterad.github.io/03-JavaScript-Homework/",
      repo: "https://github.com/canterad/03-JavaScript-Homework.git"
    },
    {
      name: 'WorkDay-Scheduler',
      description: 'Third-Party APIs',
      link: "https://canterad.github.io/Work_Day_Scheduler/",
      repo: "https://github.com/canterad/Work_Day_Scheduler.git"
    },    
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
