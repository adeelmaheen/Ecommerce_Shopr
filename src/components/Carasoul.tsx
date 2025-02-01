import Image from "next/image";
// import covercusion from "../../public/assets/covercusion.jpg";
import coverbedsheet from "../../public/assets/coverbedsheet.jpg";
import covercurtain from "../../public/assets/covercurtain.jpg";
import covershawl from "../../public/assets/covershawl.webp";
import wallDecor2 from "../../public/assets/wallDecor2.webp";
import dress1 from "../../public/assets/dress1.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-[500] h-[500px] pt-8 pb-5">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          alt="Online Shop"
          src={wallDecor2}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          alt="Shop 2"
          src={covercurtain}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          alt="Online Shop"
          src={coverbedsheet}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          alt="Shop 2"
          src={covershawl}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          alt="Shop 2"
          src={covercurtain}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
       
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          alt="Shop 2"
          src={dress1}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

