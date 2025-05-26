import Card from "./Card";
import Heading from "./heading";
import HeadSubject from "./HeadSubject";
import styles from './Service.module.css'
const Service = () => {
  return (
    <>
      <Heading text={"SERVICES"} />
      <HeadSubject text={"Why book using Travelo"} />
      <div className={`d-flex align-items-center justify-content-center gap-5 mt-5 ${styles.wrapServices}`}>
        <Card head={"All You Needs"} />
        <Card head={"Flexible Booking"} />
        <Card head={"Secure Payment"} />
      </div>
    </>
  );
};
export default Service;
