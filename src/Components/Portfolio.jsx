/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/port.jpeg";

const imageAltText = "laptop with specs";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "SHOPPING WEBSITE (ECOMMERCE) 🎉",
    description:
      "I’m excited to collaborate on a beginner-friendly article about my experience building a full-stack eCommerce website from scratch. This project highlights the essential tools and technologies, guiding newcomers through user authentication to order management.",
    url: "https://github.com/viraj9654/Shopping_Ecommerce.git",
  },
  {
    title: "ONLINE -FOOD ORDERING",
    description:
      "I developed an online food ordering website that allows users to browse menus, customize orders, and securely process payments. With real-time order tracking, this project highlights my skills in React, Java, and MySQL.",
    url: "https://github.com/viraj9654/E-Demo.git",
  },
  {
    title: "My Resume Page",
    description:
      "Created my resume using Microsoft Word and deployed it on GitHub Pages, showcasing my experience and design abilities",
    url: "https://github.com/viraj9654/Resume/blob/main/Viraj-Chaudhary.pdf",
  },
  {
    title: "GitHub Workspaces",
    description:
      "I’m excited to showcase my personal GitHub, which features a variety of repositories that demonstrate my projects and skills. .",
    url: "https://github.com/viraj9654?tab=repositories",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;