import React from 'react';
import './Timeline.css';
import PropTypes from 'prop-types';

function Timeline() {
  const data = [
    {
      id: 0,
      from: 2019,
      current: true,
      position: 'Backend Developer',
      company: 'Kobe Solutions',
      tasks: [
        'Build, design ER diagrams.',
        'Build an Restful API using NodeJS, Express and MongoDB.',
        'Implemented Authorization and Authentication using JWT.',
        'Implementing TDD tests using Jest.',
      ],
    },
    {
      id: 1,
      from: 2019,
      current: false,
      position: 'Frontend Intern',
      company: 'OSF Global',
      tasks: [
        'Build a landing page as final project using HTML, CSS, JS.',
        'Use daily techs and tools such as: Sass, Jira.',
        'Practice english skills at weekly meets.',
      ],
    },
    {
      id: 2,
      from: 2016,
      current: false,
      position: 'Fullstack Developer Intern',
      company: 'NPI - UFC (Federal University of Ceará)',
      tasks: [
        'Build front-end tasks since create JQuery scripts until build pages using Thymeleaf template engine',
        'Back-end tasks using Sprinv MVC, Spring Boot, JPA',
        'Build ER, class diagrams',
        'SCRUM techniques on real life situations.',
      ],
    },
  ];

  return (
    <ul className="timeline">
      {data.map((item) => (
        <Timeline.TimelineItem
          key={item.id}
          from={item.from}
          to={item.to}
          position={item.position}
          company={item.company}
          tasks={item.tasks}
          current={item.current}
        />
      ))}
    </ul>
  );
}

Timeline.TimelineItem = ({ from, to, position, company, tasks, current }) => (
  <li className="timeline-item">
    <span className="label" />
    <div className="card">
      <div className="card-header">
        {!to && !current && <p>{from}</p>}
        {current && <p>{from} - currently</p>}
        {to && from !== to && (
          <p>
            {from} to {to}
          </p>
        )}
        <h4>
          {position} at {company}
        </h4>
      </div>
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task}>
            <p>{task}</p>
          </li>
        ))}
      </ul>
    </div>
  </li>
);

Timeline.TimelineItem.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.bool.isRequired,
};

export default Timeline;
