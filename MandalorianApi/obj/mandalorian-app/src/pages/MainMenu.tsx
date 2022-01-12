import { FC } from "react";
import { Carousel } from "react-bootstrap";
import './MainMenu.css';
declare module '*.jpeg';

const MainMenu: FC = () => (
  <section className="MainMenu-Container">
    <section className="carousel-container">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://localhost:5001/images/frontpage/wallpaper1.jpeg"
            alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://localhost:5001/images/frontpage/wallpaper2.jpeg"
            alt="Second slide" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://localhost:5001/images/frontpage/wallpaper3.jpeg"
            alt="Third slide" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>

    <div className="info-container">

      <div className="info-box-1">

        <img className="image-box1" src="https://localhost:5001/images/frontpage/easter-egg.png" alt="" />
        <div className="text-box1">
          <h3>Easter egg hunt?</h3>
          <br />
          <h3>We have a huge community that is constantly looking for easter eggs! We are rewarding everyone with a free subscription on Disney+ if you find a easter egg and send it to themandalorian@easteregg.com</h3>
        </div>


      </div>
      <div className="info-box-2">
        <img className="image-box2" src="https://localhost:5001/images/frontpage/season3.jpeg" alt="" />
        <div className="text-box2">
          <h3>Season 3</h3>
          <br />
          <h3>Season 3 is just around the corner!
            Read about season 3 here </h3>
        </div>

      </div>

    </div>


  </section>
)

export default MainMenu;