import Heading from "./Heading";
import HeadSubject from "./HeadSubject";
import styles from "./Country.module.css";
import Button from "./Button";
const Country = () => {
  const buttons = [
    "INDIA",
    "BANGLADESH",
    "MALDIP",
    "BHUTAN",
    "CHINA",
    "PAKISTAN",
    "JAPAN",
  ];
  return (
    <>
      <div className={styles.country}>
        <Heading text={"COUNTRIES WE COVER"} />
        <HeadSubject text={"Explore all  countries in Asia"} />
        <div className={`d-flex flex-wrap justify-content-center gap-3`}>
          {buttons.map((button) => (
            <button key={button} className={`${styles.button}`}>{button}</button>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Button className="btn-primary" text="Explore Now" />
        </div>
      </div>
    </>
  );
};
export default Country;
