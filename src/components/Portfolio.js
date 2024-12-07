import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import { Image } from "./common/Image";
import Slider from "react-slick"; 

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, largeImageUrl, url } = props.content;

  const handleToggler = (value) => {
    setToggler(value);
  };

  // Settings for the image slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        <Image
          src={imageUrl}
          loader="/images/portfolio-image-placeholder.png"
          alt={title}
        />
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} slide={1}>
          <Slider {...sliderSettings}>
            {largeImageUrl.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Zoomed-in ${title}`} />
              </div>
            ))}
          </Slider>
        </FsLightbox>
      )}
    </div>
  );
}

export default Portfolio;
