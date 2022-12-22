import React from "react";
import "./portfolio.css";
import hams from "../../assets/Hamster.png";
import wedding from "../../assets/bröllops fotograf.png";
import planet from "../../assets/planetsPic.png";
import where from "../../assets/where.png";
import timer from "../../assets/timer.png";
import stickan from "../../assets/stickan.png";
function Portfolio() {
  const data = [
    {
      id: 1,
      image: hams,
      title: "HamsterWars",
      github: "https://github.com/Meron92/HamsterWar-Fullstack",
    },
    {
      id: 2,
      image: wedding,
      title: "Wedding App",
      github: "https://github.com/Meron92/inlamning-dynamisk",
    },
    {
      id: 3,
      image: planet,
      title: "Planets",
      github: "https://github.com/Meron92/planets",
    },
    {
      id: 4,
      image: timer,
      title: "Timer",
      github: "https://github.com/Meron92/interval-app-main",
    },
    {
      id: 5,
      image: where,
      title: "Where its at",
      github: "https://github.com/Meron92/Where-its-at",
    },
    {
      id: 6,
      image: stickan,
      title: "Stickans verktygs uthyrning",
      github:
        "https://www.figma.com/proto/z74ZfrWorawfRfSzkDRBOm/Stickan-uthyrning?node-id=17%3A834&starting-point-node-id=17%3A834",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} className="img" />
                <h3 className="title">{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    id="btn-port"
                    target="_blank"
                  >
                    Show
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
