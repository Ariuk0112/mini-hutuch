"use client";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla h-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((item, index) => {
            const { title, imgSrc, description, date } = item;
            const backgroundImageStyle = {
              backgroundImage: `url('${imgSrc}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            };
            return (
              <div className="embla__slide" key={index}>
                <div style={backgroundImageStyle} className="h-full rounded-md">
                  <div className="h-full flex">
                    <div className="m-5 p-8 bg-[#404040] bg-opacity-50 backdrop-blur-md shadow-md rounded-md mt-auto">
                      <h1 className="text-[24px] font-bold">{title}</h1>
                      <span className="text-[10px] text-[#707070]">
                        {date.toUTCString()}
                      </span>
                      <p className="text-[14px] mt-2">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
