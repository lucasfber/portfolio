import React from 'react';
import profilePic from '../../assets/me.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="info">
        <h2>about me</h2>
        <p>
          Hello! I'm Brittany, a software engineer based in Boston, MA. I enjoy
          creating things that live on the internet, whether that be websites,
          applications, or anything in between.
        </p>
      </div>
      <div className="img-wrapper">
        <img src={profilePic} alt="profile" />
      </div>
    </section>
  );
}
