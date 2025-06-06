import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import movie from "../../images/movieApp.png";
import gallery from "../../images/gallery-img.png";
import advtodo from "../../images/advTodo.png";
import tropitech from "../../images/tropitech.png";
import dijievents from "../../images/dijievents.png"
import predictWin from "../../images/predict-win.png"
import penora from "../../images/penora.png";
import solidRock from "../../images/solid-rock.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 3,
    name: "Solid Rock School",
    image: solidRock,
    link: "https://www.solidrockfoundationschools.com/",
  },
  {
    id: 3,
    name: "Penora Skin Care",
    image: penora,
    link: "https://www.penoraskincare.com/",
  },
  {
    id: 3,
    name: "Event Management System (Dijievents)",
    image: dijievents,
    link: "https://www.dijievents.com/",
  },
  {
    id: 2,
    name: "Movies web application",
    image: movie,
    link: "https://hngx-movieapp.netlify.app/",
  },
  {
    id: 2,
    name: "Gallery image app",
    link: "https://hngimage-gallery.netlify.app/",
    image: gallery,
  },
  // {
  //   id: 2,
  //   name: "Advance todo app",
  //   image: advtodo,
  //   link: "https://todo-schoolinka.vercel.app/",
  // },
  {
    id: 2,
    name: "Predict and Win",
    image: predictWin,
    link: "https://predic-and-win.netlify.app",
  },
  {
    id: 3,
    name: "Tropitech",
    image: tropitech,
    link: "https://tulasi-tropiteq.netlify.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Personal",
  },
  {
    filterId: 3,
    label: "Development",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank">
                      <button >

                        Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
