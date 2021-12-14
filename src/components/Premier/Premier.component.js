import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

const Premier = () => {
  const settings = {
    infinity: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    InitialSlide: 0
  };

  const PremierImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    }
  ];

  return (
      <>
      <div className="flex flex-col items-start gap-1 py-4">
        <h3 className="text-white text-xl font-bold">Premieres</h3>
        <p className="text-white text-sm">Brand New releases every friday</p>
      </div>
        <Slider {...settings} >
        {PremierImages.map((image)=> (
          <Poster {...image} isDark/>
        ))}
        </Slider>
      </>
  );
};

export default Premier;
