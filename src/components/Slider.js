import Carousel from "react-bootstrap/Carousel";

const Slider = (props) => {
  const imgs = props.data;

  return (
    <Carousel>
      {imgs.map((img, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              src={img}
              className="d-block w-100 img-thumbnail projectImgs"
              alt="..."
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
