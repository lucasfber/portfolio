import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import profilePic from '../../assets/me.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="section-title">about me</h2>
      </ScrollAnimation>
      <div className="content">
        <div className="info">
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <p>
              Hello! I'm Brittany, a software engineer based in Boston, MA. I
              enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              repellat esse laudantium, ex voluptatem aut quibusdam fugiat porro
              temporibus nihil et veritatis est eligendi voluptates facere nobis
              nisi. Exercitationem, sit.
            </p>
          </ScrollAnimation>
        </div>
        <div className="img-wrapper">
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <img src={profilePic} alt="profile" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
