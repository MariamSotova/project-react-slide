import { register } from "swiper/element/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "./img/Group1.svg";
import img2 from "./img/Group2.svg";
import img3 from "./img/Group3.svg";

register();

export const Slider = () => {
  return (
    <div className="container">
      <swiper-container
        slides-per-view="1" // сколько видно картинок для перелистывания
        navigation="true" //стрелочки влево и вправо
        loop="true"
        speed={900}
      >
        <swiper-slide parallax="enabled" class="button-bg" id="swiper1">
          <div>
            <img className="img-position" src={img1} alt="slider1" />
          </div>
          <div>
            <p>math</p>
          </div>
          <div>
            <button href="#">view</button>
          </div>
        </swiper-slide>
        <swiper-slide className="button-bg" id="swiper2">
          <div>
            <img className="img-position" src={img2} alt="slider2" />
          </div>
          <div>
            <p>english</p>
          </div>
          <div>
            <button href="#">view</button>
          </div>
        </swiper-slide>
        <swiper-slide className="button-bg" id="swiper3">
          <div>
            <img className="img-position" src={img3} alt="slider3" />
          </div>
          <div>
            <p>chess</p>
          </div>
          <div>
            <button href="#">view</button>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};
