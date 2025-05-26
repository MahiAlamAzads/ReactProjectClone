import Button from "./Button";
import styles from "./Banner.module.css";
import image from "./images/image.png";
import banner from './images/Hero Section.png'
const Banner = () => {
  return (
    <div className={`${styles.banner}`}>
      <div class="row text-center">
        <div className="col-6 text-start d-flex justify-content-center align-items-center">
          <div className="ms-3">
            <h1 className={`${styles.h1}`}>
              From <br /> Southeast Asia <br />{" "}
              <span className={`${styles.toTheWorld}`}>to the World.</span>
            </h1>
            <p className={`${styles.stay} mt-3 mb-4`}>
              Stay updated with travel tips. recommendations, and latest promos.
            </p>
            <div className="group-button d-flex gap-2">
              <Button
                className={`${styles.getStart} btn-primary`}
                text={"Get Started"}
              />
              <Button
                className={`${styles.getStart} btn-outline-secondary`}
                text={"Watch demo"}
              />
            </div>
          </div>
        </div>
        <div class="col-6">
          <img className={`${styles.img} w-100 h-100 p-3`} src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
