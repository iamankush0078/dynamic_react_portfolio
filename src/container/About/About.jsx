import React, { useState, useEffect } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"] | order(title asc)';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        About <span>Me</span> <br />
      </h2>

      <div className="app__profiles">
        <p className="p-text" style={{ marginTop: 10 }}>
          {abouts.map((item) => {
            return (
              <p className="about__item" key={item._id}>
                <BsArrowReturnRight className="arrow_icon" />
                {item.description}
              </p>
            );
          })}
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
