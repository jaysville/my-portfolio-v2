import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

const Slider = (props) => {
  const img = props.data;

  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={img[0]}
          className="d-block w-100 img-thumbnail projectImgs"
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img[1]}
          className="d-block w-100 img-thumbnail projectImgs"
          alt="..."
        />
      </Carousel.Item>
      <CarouselItem>
        <img
          src={img[2]}
          className="d-block w-100 img-thumbnail projectImgs"
          alt="..."
        />
      </CarouselItem>
      {img[3] && (
        <CarouselItem>
          <img
            src={img[3]}
            className="d-block w-100 img-thumbnail projectImgs"
            alt="..."
          />
        </CarouselItem>
      )}
    </Carousel>
  );
};

export default Slider;
