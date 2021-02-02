import React from 'react';
import profilePic from '../../assets/me.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">about me</h2>
      <div className="content">
        <div className="info">
          <p>
            Hello! I'm Brittany, a software engineer based in Boston, MA. I
            enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            repellat esse laudantium, ex voluptatem aut quibusdam fugiat porro
            temporibus nihil et veritatis est eligendi voluptates facere nobis
            nisi. Exercitationem, sit.
          </p>
        </div>
        <div className="img-wrapper">
          <img src={profilePic} alt="profile" />
        </div>
      </div>
    </section>
  );
}
