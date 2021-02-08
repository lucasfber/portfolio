import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Timeline from '../timeline/Timeline';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="section-title">my experience</h2>
      </ScrollAnimation>
      <Timeline />
    </section>
  );
}
