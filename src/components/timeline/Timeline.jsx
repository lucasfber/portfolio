import React from 'react';
import './Timeline.css';
import PropTypes from 'prop-types';
import { EXPERIENCES } from '../../services/data';

function Timeline({ className }) {
  return (
    <ul className={`timeline ${className}`}>
      {EXPERIENCES.map((item) => (
        <Timeline.TimelineItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

Timeline.TimelineItem = ({ item }) => (
  <li className="timeline-item">
    <span className="label" />
    <div className="card">
      <div className="card-header">
        {!item.to && !item.current && <p>{item.from}</p>}
        {item.current && <p>{item.from} - currently</p>}
        {item.to && item.from !== item.to && (
          <p>
            {item.from} to {item.to}
          </p>
        )}
        <h4>
          {item.position} at {item.company}
        </h4>
      </div>
      <ul className="tasks">
        {item.tasks.map((task) => (
          <li key={task}>
            <p>{task}</p>
          </li>
        ))}
      </ul>
    </div>
  </li>
);

Timeline.TimelineItem.propTypes = {
  item: PropTypes.shape({
    to: PropTypes.number,
    from: PropTypes.number,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    current: PropTypes.bool.isRequired,
  }),
};

export default Timeline;
