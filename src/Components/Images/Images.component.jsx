import MilkBottles from "../../assets/desktop/image-gallery-milkbottles.jpg";
import OrangePlate from "../../assets/desktop/image-gallery-orange.jpg";
import Cone from "../../assets/desktop/image-gallery-cone.jpg";
import SugarCubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";

import "./Images.style.css";

const Images = () => {
  return (
    <div className="images-container" id="projects">
      <div>
        <img src={MilkBottles} alt="imag" />
      </div>
      <div>
        <img src={OrangePlate} alt="imag" />
      </div>
      <div>
        <img src={Cone} alt="imag" />
      </div>
      <div>
        <img src={SugarCubes} alt="imag" />
      </div>
    </div>
  );
};

export default Images;
